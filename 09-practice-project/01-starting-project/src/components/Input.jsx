import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, type, ...props }, ref) {
    return (
        <div className="flex flex-col p-2">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            <input ref={ref} {...props} type={type} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        </div>
    );
});

export default Input;
