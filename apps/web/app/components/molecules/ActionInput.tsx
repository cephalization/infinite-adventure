import { ArrowRightCircleIcon } from "../icons/ArrowRightCircleIcon";

export const ActionInput = () => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">What will you do?</span>
      </label>
      <div className="input-group w-full">
        <input
          type="text"
          placeholder="I walk over there…"
          className="input input-bordered w-full"
        />
        <button className="btn btn-square">
          <ArrowRightCircleIcon />
        </button>
      </div>
    </div>
  );
};
