import { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { FORM_DELIVERY_ID, TIME_PICKER_24_H } from "constants/components";
import * as S from "./delivery-form.style";

const DeliveryForm = () => {
  const inputDate = useRef<HTMLInputElement | null>(null);
  const inputTime = useRef<HTMLInputElement | null>(null);
  const [dateDelivery, setDateDelivery] = useState([])

  const handleDateChange = (selectedDate: Date[], shortDate: string) => {
    console.log(selectedDate, shortDate);
  }

  const handleTimeChange = (selectedDate: Date[], shortDate: string) => {
    console.log(selectedDate, shortDate);
  }

  useEffect(() => {
    if(inputDate.current) {
      flatpickr(inputDate.current, {
        onChange: handleDateChange,
      });
    }

    if(inputTime.current) {
      flatpickr(inputTime.current, {
        ...TIME_PICKER_24_H,
        onChange: handleTimeChange,
      });
    }
  })

  return(
    <form id={FORM_DELIVERY_ID}>
      <S.Fieldset $bottom="30px">
        <S.Legend>Когда доставить?</S.Legend>
        <S.Input
          ref={inputDate}
          id="delivery-date"
          name="delivery-date"
          key="delivery-date"
          placeholder="Выберите дату"
          // value={dateDelivery}
          required
        />
        <S.Input
          ref={inputTime}
          id="delivery-time"
          name="delivery-time"
          key="delivery-time"
          placeholder="Выберите время"
          required
        />
      </S.Fieldset>

      <S.Fieldset>
        <S.Legend>Куда доставить?</S.Legend>
        <S.DestinationWrapper>
          <S.DestinationInput
            placeholder="Выберите адрес доставки"
            id="delivery-place"
            name="delivery-place"
            key="delivery-place"
            required
          />
        <S.OptionList isHidden>
          <S.OptionItem tabIndex={0}>Центр</S.OptionItem>
          <S.OptionItem tabIndex={0}>Север</S.OptionItem>
          <S.OptionItem tabIndex={0}>Юго-восток</S.OptionItem>
          <S.OptionItem tabIndex={0}>Прибрежная</S.OptionItem>
          <S.OptionItem tabIndex={0}>Южная</S.OptionItem>
        </S.OptionList>
        </S.DestinationWrapper>
      </S.Fieldset>

      <S.Fieldset>
        <S.Legend>Имя</S.Legend>
        <S.BigInput
          id="delivery-name"
          name="delivery-name"
          key="delivery-name"
          placeholder="Дмитрий"
          required
        />
      </S.Fieldset>
      <S.Fieldset>
        <S.Legend>Телефон</S.Legend>
        <S.BigInput
          id="delivery-phone"
          name="delivery-phone"
          key="delivery-phone"
          placeholder="+7-987-324-5050"
          pattern="[+][0-9]{1,3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
          type="tel"
          required
        />
      </S.Fieldset>
    </form>
  )
}

export default DeliveryForm;
