type ToggleSwitchProps = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  };
  


export function ToggleSwitch({ setEnabled, enabled }: ToggleSwitchProps) {


    return (
        <div className="flex items-center space-x-4   border-e-red-400">
            <span className=" text-lg font-medium text-gray-700">
                { "INR(₹)"}
            </span>
            <button
            onClick={() => setEnabled(!enabled)}
            className={`w-[4.1rem] h-8 flex items-center rounded-full p-1 transition-colors duration-300 
            ${enabled ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
                <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 
                ${enabled ? 'translate-x-8' : 'translate-x-0'}`}
                />
            </button>
            <span className=" text-lg font-medium text-gray-700">
                { "USD($)"}
            </span>
        </div>
    );
}
