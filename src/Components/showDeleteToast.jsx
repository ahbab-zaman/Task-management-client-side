import { toast } from "react-hot-toast";

const showDeleteToast = (onConfirm) => {
  toast(
    (t) => (
      <div className="p-3">
        <p className="mb-2 text-lg font-semibold">Are you sure?</p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Confirm
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      duration: 5000, // Adjust duration as needed
      position: "top-right",
    }
  );
};

export default showDeleteToast;
