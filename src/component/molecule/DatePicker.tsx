import { Button } from '../atoms';
import Image from 'next/image';
import useCalendar from 'hooks/useCalendar';
import DatePicker from 'react-multi-date-picker';

type propsType = {
    onChange: (date: any) => void;
};

const DatePickerForm = ({ onChange }: propsType) => {
    const { datePickerRef, handleChangeClose, handleChangeOpen } = useCalendar();
    return (
        <>
            <Button bgColor="gray1" style={{ padding: '9px', marginRight: '13px' }} onClick={handleChangeOpen}>
                <Image src="/images/icon/Calendar.svg" alt="icon" width={24} height={24} />
            </Button>
            <DatePicker className="custom-picker" ref={datePickerRef} onChange={onChange}>
                <Button text onClick={handleChangeClose} style={{ margin: '5px' }}>
                    <Image src="/images/icon/x.svg" alt="icon" width={16} height={16} />
                </Button>
            </DatePicker>
        </>
    );
};

export default DatePickerForm;
