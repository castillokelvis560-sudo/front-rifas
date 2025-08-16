import { LuClipboard } from "react-icons/lu";

interface Props {
  type: string;
  bank: string;
  logo: string;
  bdv?: string;
  phone?: string;
  indentify?: string;
  email?: string;
  nameZelle?: string;
  totalUsd: number;
  totalBs: number;
  bankNumb?: string;
}
const PaymentInfoCard = ({
  bank,
  logo,
  phone,
  indentify,
  email,
  nameZelle,
  totalUsd,
  totalBs,
  type,
  bankNumb
}: Props) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copiado: ${text}`);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#ffbf00] to-[#ff7f11] text-white rounded-2xl p-6 max-w-lg w-[350px] text-center shadow-lg">
      <div className="absolute -bottom-40 left-60 w-80 h-60 z-[-1] rounded-full bg-gradient-to-br from-orange-600 to-orange-300 opacity-20 blur-3xl pointer-events-none"></div>

      <h2 className="text-lg font-semibold">Modo de Pago</h2>
      <p className="text-sm mb-2">{bank}</p>

      <div className="flex justify-center items-center my-2">
        <img
          src={logo}
          alt={bank}
          className="w-12 h-12 rounded-full"
          loading="lazy"
        />
      </div>

      {type === "Banca Amiga" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Numero De Banco:</span> {bankNumb}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(bankNumb ?? "")}
            />
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold">Teléfono:</span> {phone}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(phone ?? "")}
            />
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold">Cédula de Identidad:</span>{" "}
            {indentify}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(indentify ?? "")}
            />
          </p>
        </div>
      ) : null}

      {type === "paypal" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Email:</span> {email}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(email ?? "")}
            />
          </p>
        </div>
      ) : null}

      {type === "zelle" ? (
        <div className="text-center space-y-2">
          <p className="flex gap-2 items-center">
            <span className="font-bold">Email:</span> {email}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(email ?? "")}
            />
          </p>

          <p className="flex gap-2 items-center">
            <span className="font-bold">Nombre:</span> {nameZelle}
            <LuClipboard
              className="w-5 h-5 cursor-pointer"
              onClick={() => copyToClipboard(nameZelle ?? "")}
            />
          </p>
        </div>
      ) : null}

      <h3 className="mt-4 text-lg font-bold">Total a Pagar:</h3>

      {type === "Banca Amiga" ? (
        <p className="text-2xl font-bold">
          {totalBs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Bs.
        </p>
      ) : null}

      {type === "zelle" || type === "paypal" ? (
        <p className="text-2xl font-bold">{totalUsd} $ USD</p>
      ) : null}
    </div>
  );
};

export default PaymentInfoCard;
