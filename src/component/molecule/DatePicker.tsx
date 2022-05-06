import { useState } from 'react';
import { Button } from '../atoms';
import Image from 'next/image';
import useCalendar from 'hooks/useCalendar';
import DatePicker from 'react-multi-date-picker';

type propsType = {
    onChange: (date: any) => void;
};

const DatePickerForm = ({ onChange }: propsType) => {
    const { datePickerRef, handleChangeClose, handleChangeOpen } = useCalendar();
    const [props, setProps] = useState({
        value: new Date(),
        format: 'YYYY.MM.DD',
        onChange: (date: any) => console.log(date.format())
    });
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    return (
        <>
            <Button bgColor="gray1" style={{ padding: '9px', marginRight: '13px' }} onClick={handleChangeOpen}>
                <Image src="/images/icon/Calendar.svg" alt="icon" width={24} height={24} />
            </Button>

            <DatePicker
                className="custom-picker"
                {...props}
                onPropsChange={setProps}
                weekDays={weekDays}
                months={months}
                arrow={false}
                calendarPosition="bottom-center"
                ref={datePickerRef}
                onChange={onChange}
            >
                <Button className="close" text onClick={handleChangeClose}>
                    <Image src="/images/icon/x.svg" alt="icon" width={16} height={16} />
                </Button>
            </DatePicker>
        </>
    );
};

export default DatePickerForm;
