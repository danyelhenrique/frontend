import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import AppoitmentModal from "../../components/AppoitmentModal";
import { format, subDays } from "date-fns";
import pt from "date-fns/locale/pt";
import { utcToZonedTime } from "date-fns-tz";
import api from "../../services/api";

import { load_schedule_history } from "../../store/modules/scheduleHistory";
import cover from "../../assets/images/joe.jpg";

import {
  Container,
  UserAndDatePicker,
  User,
  TodayAndDatePicker,
  Content,
  ContentItemContainer,
  ContentItem,
  UserItem,
  UserData,
  Dates,
  DateWeek,
  Entrada,
  Almoco,
  DatePicker,
  FimdoAlmoco,
  DateAppoitment,
  Saida,
} from "./styles";

function formateDate(date) {
  const newDate = format(date, "kk:mm:s", { locale: pt });
  return newDate;
}
function Dashboard() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const schedule_history = useSelector((state) => state.schedule_history);
  const { name, email } = useSelector((state) => state.user);

  useEffect(() => {
    async function datesGet() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const start_range = utcToZonedTime(subDays(new Date(), 7), timezone);

      const end_range = utcToZonedTime(new Date(), timezone);

      let { data } = await api.get("/schedules", {
        params: { end_range, start_range },
      });

      const payload = await data.map((d) => {
        let { schedule } = d;
        let { entry, lunch, lunch_end, exit } = schedule;

        const msg = "não bateu o ponto";

        const entryTimezone = entry && utcToZonedTime(entry, timezone);
        const lunchTimezone = lunch && utcToZonedTime(lunch, timezone);
        const lunchEndTimezone =
          lunch_end && utcToZonedTime(lunch_end, timezone);
        const exitEndTimezone = exit && utcToZonedTime(exit, timezone);
        const dateTimezone = utcToZonedTime(d.date, timezone);

        schedule.entry = !entry ? msg : formateDate(entryTimezone);
        schedule.lunch = !lunch ? msg : formateDate(lunchTimezone);
        schedule.lunch_end = !lunch_end ? msg : formateDate(lunchEndTimezone);
        schedule.exit = !exit ? msg : formateDate(exitEndTimezone);
        d.date = format(dateTimezone, "d 'de' MMMM 'de' yyyy ", { locale: pt });

        return d;
      });

      dispatch(load_schedule_history(payload));
    }
    datesGet();
  }, []);

  return (
    <Container>
      <UserAndDatePicker>
        <User>
          <img src={cover} alt="user cover" />
          <div>
            <span>{name || ""}</span>
            <p> {email || ""}</p>
          </div>
        </User>
        <TodayAndDatePicker>
          <a onClick={() => setOpenModal(true)}>Bater ponto</a>
          {openModal && <AppoitmentModal closeModal={setOpenModal} />}
          <DatePicker> 30/5/2020 </DatePicker>
        </TodayAndDatePicker>
      </UserAndDatePicker>
      <Content>
        <DateWeek>
          <h4>Usuarios na Ultima Semana</h4>
        </DateWeek>
        <ContentItemContainer>
          <ContentItem>
            {schedule_history.map(({ user, schedule, date }) => {
              const { entry, lunch, lunch_end, exit } = schedule;

              return (
                <UserItem>
                  <UserData>
                    <img src={cover} alt="user cover" />
                    <div>
                      <span>{user.name}</span>
                      <p>{user.email}</p>
                    </div>
                  </UserData>
                  <DateAppoitment>{date}</DateAppoitment>

                  <Dates>
                    <Entrada>
                      <strong> Entrada:</strong>
                      <span> {entry}</span>
                    </Entrada>
                    <Almoco>
                      <strong> Almoco:</strong>
                      <span> {lunch}</span>
                    </Almoco>
                    <FimdoAlmoco>
                      <strong>Fim do Almoco:</strong>
                      <span> {lunch_end}</span>
                    </FimdoAlmoco>

                    <Saida>
                      <strong>Saida:</strong>
                      <span> {exit}</span>
                    </Saida>
                  </Dates>
                </UserItem>
              );
            })}
          </ContentItem>
        </ContentItemContainer>
      </Content>
    </Container>
  );
}

export default Dashboard;
