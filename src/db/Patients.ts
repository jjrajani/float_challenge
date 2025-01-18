import { Patient } from "@/types/Patient";
import { useCallback, useMemo, useState } from "react";
import { generateVisits } from "@/db/Visits";

export const patients: Patient[] = [
  {
    name: "John Jackson",
    id: "PAT_1",
    dob: "1985-07-14",
    gender: "Male",
    visit_ids: ["VISIT_1", "VISIT_2"],
    visits: [], // gets overridden in usePatient
  },
  {
    name: "John Thomas",
    id: "PAT_2",
    dob: "1985-07-14",
    gender: "Male",
    visit_ids: ["VISIT_3", "VISIT_4"],
    visits: [], // gets overridden in usePatient
  },
  {
    name: "Chris Johnson",
    id: "PAT_3",
    dob: "1985-07-14",
    gender: "Male",
    visit_ids: ["VISIT_5", "VISIT_6"],
    visits: [], // gets overridden in usePatient
  },
];

export const usePatients = () => {
  const [filter, setFilter] = useState("");

  const filteredPatients = useMemo(() => {
    if (filter === "") {
      return patients;
    }
    return patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(filter.toLowerCase()) ||
        patient.id.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const onFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value || "");
    },
    []
  );

  return {
    patients: filteredPatients,
    onFilterChange,
  };
};

const getPatient = (id: string) => patients.find((p) => p.id === id);

export const usePatient = (id?: string) => {
  const patient = useMemo(() => {
    if (!id) {
      return undefined;
    }
    const _patient = getPatient(id);
    if (_patient) {
      const visits = generateVisits(50, id);
      return {
        ..._patient,
        visits,
      };
    }
  }, [id]);

  return {
    patient,
  };
};

export const getPatientAge = (dob?: string): undefined | number => {
  if (!dob) {
    return;
  }
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust age if the current date is before the birthday this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};
