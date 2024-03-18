import { styled } from 'styled-components';

// const Button = styled.button`
//     padding: 1rem 2rem;
//     font-weight: 600;
//     text-transform: uppercase;
//     border-radius: 0.25rem;
//     color: #1f2937;
//     background-color: #f0b322;
//     border-radius: 6px;
//     border: none;

//     &:hover {
//         background-color: #f0920e;
//     }
// `;

export default function Button({ children, ...props }) {
    return (
        <button
            {...props}
            className="py-2 px-4 font-semibold uppercase rounded border-stone-900 bg-amber-400 hover:bg-amber-500">
            {children}
        </button>
    );
    //         <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
}
