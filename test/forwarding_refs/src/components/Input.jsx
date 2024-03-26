import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, type, ...props }, ref) {
    // Todo: Accept forwarded ref and "connect" it to the <input> element
    return (
        <p className="control">
            <label {...props}>{label}</label>
            {/* Todo: "Forward" remaining props to <input> element */}
            <input type={type} ref={ref} />
        </p>
    );
});

export default Input;
