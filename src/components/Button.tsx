import { SubmitButtonT } from "@/types/ButtonTypes"

const SubmitButton = ({label}:SubmitButtonT) => {
    return (
        <div className="flex justify-center mt-6 mb-3">
            <button className="bg-green-700 pl-10 pr-10 text-white rounded-md py-2 px-3">{label}</button>
        </div>
    )
}

export default SubmitButton;