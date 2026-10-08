import { useEffect, useState } from "react";
import { getMyProfile, updateMyProfile } from "../../api/userDataProfileAPI";

interface IProfileEdit {
  onClose: () => void;
}

const ProfileEdit = ({ onClose }: IProfileEdit) => {
  const [profile, setProfile] = useState<User | null>(null);
  const [formDraft, setFormDraft] = useState({
    age: 0,
    weight: 0,
    height: 0,
    goal: "maintain" as Goals,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();

        setProfile(data);
        setFormDraft({
          age: data.age,
          weight: data.weight,
          height: data.height,
          goal: data.goal,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profile) {
    return <p>Profile not found</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormDraft((prev) => ({
      ...prev,
      [name]: name === "goal" ? value : Number(value),
    }));
  };

  const handleSave = async () => {
    if (!profile) return;
    try {
      const updateProfile = await updateMyProfile(profile.id, formDraft);
      setProfile(updateProfile);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Edit Your Profile</h2>
      </div>

      <div className="space-y-5">
        {/* Age Field */}
        <FormField
          label="Age"
          name="age"
          type="number"
          value={formDraft.age}
          onChange={handleChange}
        />

        {/* Weight Field */}
        <FormField
          label="Weight (kg)"
          name="weight"
          type="number"
          value={formDraft.weight}
          onChange={handleChange}
        />

        {/* Height Field */}
        <FormField
          label="Height (cm)"
          name="height"
          type="number"
          value={formDraft.height}
          onChange={handleChange}
        />

        {/* Goal Field */}
        <div className="space-y-2">
          <label className="text-sm text-slate-400 flex items-center gap-2">
            Fitness Goal
          </label>
          <select
            name="goal"
            value={formDraft.goal}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all cursor-pointer"
          >
            <option value="lose weight">Lose Weight</option>
            <option value="maintain weight">Maintain Weight</option>
            <option value="gain muscle">Gain Muscle</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={onClose}
          className="flex-1 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  name: string;
  type: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({ label, name, type, value, onChange }: FieldProps) => (
  <div className="space-y-2">
    <label className="text-sm text-slate-400 flex items-center gap-2">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
      />
    </div>
  </div>
);

export default ProfileEdit;
