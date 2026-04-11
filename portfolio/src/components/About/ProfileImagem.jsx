import profileImg from "../../assets/images/perfil-ricardo2.jpeg";

export default function ProfileImage() {
  return (
    <div className="flex justify-center">
      <div className="relative w-80 h-90">
        <img
          src={profileImg}
          alt="Ricardo Vieira"
          className="w-full h-full rounded-2xl object-cover object-top shadow-2xl hover:scale-105 transition-transform duration-300  dark:ring-blue-400"
        />
      </div>
    </div>
  );
}
