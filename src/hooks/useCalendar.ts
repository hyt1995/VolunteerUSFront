import { useRef, useCallback } from 'react';

const useCalendar = () => {
    const datePickerRef = useRef<any>(null);

    const handleChangeOpen = useCallback(() => {
        datePickerRef.current.openCalendar();
    }, []);

    const handleChangeClose = useCallback(() => {
        datePickerRef.current.closeCalendar();
    }, []);

    return { datePickerRef, handleChangeClose, handleChangeOpen };
};

export default useCalendar;
