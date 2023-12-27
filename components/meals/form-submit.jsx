"use client";

import { useFormStatus } from "react-dom";

function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share meal"}
    </button>
  );
}

export default FormSubmit;
