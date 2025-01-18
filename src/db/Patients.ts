import { Patient } from "@/types/Patient";
import { useCallback, useMemo, useState } from "react";
import { generateVisits } from "@/db/Visits";

export const patients: Patient[] = [
  {
    name: "John Jackson",
    id: "PAT_1",
    visits: ["VISIT_1", "VISIT_2"], // gets overridden in usePatient
  },
  {
    name: "John Thomas",
    id: "PAT_2",
    visits: ["VISIT_3", "VISIT_4"], // gets overridden in usePatient
  },
  {
    name: "Chris Johnson",
    id: "PAT_3",
    visits: ["VISIT_5", "VISIT_6"], // gets overridden in usePatient
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
      return null;
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
