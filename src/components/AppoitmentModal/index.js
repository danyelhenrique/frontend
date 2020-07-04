import React, { useState, useEffect } from "react";

import pt from "date-fns/locale/pt";
import { format } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

import { useDispatch, useSelector } from "react-redux";

import { postAppoitment } from "../../store/modules/appoitment";
import {
  Addappointment,
  Modal,
  DatesModal,
  ModalDate,
  Submitappointment,
} from "./styles";

function formateDate(date) {
  const newDate = format(date, "kk:mm:s", { locale: pt });
  return newDate;
}

function convertToUtc(date) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const newDate = zonedTimeToUtc(date, timezone);
  return newDate;
}
function AppoitmentModal({ closeModal }) {
  const dispatch = useDispatch();
  const { id, entry, lunch, lunch_end, exit } = useSelector(
    (state) => state.appoitment
  );

  const [timeFormated, setTimeFormated] = useState(() => {
    const t = formateDate(new Date());
    return t;
  });

  const [todayFormated, setTodayFormated] = useState(() => {
    const d = format(new Date(), "d 'de' MMMM yyyy", { locale: pt });
    return d;
  });

  const [appoitmeId, setAppoitmeId] = useState(null);

  useEffect(() => {
    const appoitmetExist = localStorage.getItem("@appointmet-exists");

    if (appoitmetExist) {
      setAppoitmeId(appoitmetExist);
    }
  }, []);

  function addEntry() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const entry = zonedTimeToUtc(new Date(), timezone);
    if (id) {
      dispatch(postAppoitment({ date: entry, entry, schedule_id: id }));
    } else {
      dispatch(postAppoitment({ date: entry, entry }));
    }
  }

  function addLuch() {
    const lunch = convertToUtc(new Date());
    if (id) {
      dispatch(postAppoitment({ date: lunch, lunch, schedule_id: id }));
    } else {
      dispatch(postAppoitment({ date: lunch, lunch }));
    }
  }
  function addLuchEnd() {
    const lunch_end = convertToUtc(new Date());
    if (id) {
      dispatch(postAppoitment({ date: lunch_end, lunch_end, schedule_id: id }));
    } else {
      dispatch(postAppoitment({ date: lunch_end, lunch_end }));
    }
  }
  function Exit() {
    const exit = convertToUtc(new Date());
    if (id) {
      dispatch(postAppoitment({ date: exit, exit, schedule_id: id }));
    } else {
      dispatch(postAppoitment({ date: exit, exit }));
    }
  }

  return (
    <Addappointment>
      <Modal>
        <DatesModal>
          <h3>Bater Ponto</h3>
          <ModalDate>
            <input
              type="text"
              value={todayFormated}
              disabled
              placeholder={todayFormated}
            />
            <input
              type="text"
              value={todayFormated}
              disabled
              placeholder={timeFormated}
            />
          </ModalDate>
          <Submitappointment onClick={addEntry} disabled={entry}>
            bater ponto de entrada
          </Submitappointment>

          <Submitappointment onClick={addLuch} disabled={lunch}>
            bater ponto de saida para o alcomço
          </Submitappointment>

          <Submitappointment onClick={addLuchEnd} disabled={lunch_end}>
            bater ponto de chegada do almoço
          </Submitappointment>

          <Submitappointment onClick={Exit} disabled={exit}>
            bater ponto de saida
          </Submitappointment>

          <Submitappointment className="exit" onClick={() => closeModal()}>
            Sair
          </Submitappointment>
        </DatesModal>
      </Modal>
    </Addappointment>
  );
}

export default AppoitmentModal;
