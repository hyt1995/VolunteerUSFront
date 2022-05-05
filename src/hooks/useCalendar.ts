import { useRef } from 'react';

const useCalendar = () => {
    const datePickerRef = useRef<any>(null);

    const handleChangeOpen = () => {
        datePickerRef.current.openCalendar();
    };

    const handleChangeClose = () => {
        datePickerRef.current.closeCalendar();
    };

    return { datePickerRef, handleChangeClose, handleChangeOpen };
};

export default useCalendar;
