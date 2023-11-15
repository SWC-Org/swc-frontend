import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import vercel from "../../public/assets/images/vercel.svg";
import { useAppSelector } from "../../redux/store";

type ReviewComponentProps = {
  customerName: string;
  customerEmail: string;
  customerAdressLine1: string;
  customerAdressLine2: string;
  customerCity: string;
};

const ReviewComponent = ({
  customerName,
  customerEmail,
  customerAdressLine1,
  customerAdressLine2,
  customerCity,
}: ReviewComponentProps) => {
  //states
  const windowData = useAppSelector((state) => state.windowDataReducer);

  console.log(windowData, "windowData");

  return (
    <div className="px-32">
      <section>
        <Typography>Review your order</Typography>
      </section>

      {/* A4 Email  */}
      <div className="relative overflow-x-auto  w-[794px] bg-slate-100 p-5 mt-5">
        {/* HEADER */}
        <section className="flex items-center justify-between h-[300px]  border-b-4">
          {/* address */}
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <p className="font-black">Spectrum Window Concepts</p>
              <p>434/189B South Centre Road</p>
              <p>Tullamarine VIC 3043</p>
              <p>sales@spectrumwindowconcepts.com.au</p>
              <p>ABN 1550933</p>
            </div>
            <div>
              <p className="font-black">Address</p>
              <p>Roshanthi Perera</p>
              <p>100 Liberty Auenue</p>
              <p>Roville</p>
            </div>
          </div>

          {/* lofo stuff */}

          <div className="flex flex-col gap-10 text-md">
            {/* logo */}
            <div>
              <Image src={vercel} alt="company-logo" />
            </div>

            {/* detials */}
            <div className=" flex flex-col gap-3">
              <p className=" p-2 bg-blue-400 text-white w-auto">
                Quote: <span>001</span>
              </p>
              <p className=" p-2 bg-blue-400 text-white w-auto">
                Date:{" "}
                <span>
                  {
                    ///current date
                    new Date().toLocaleDateString()
                  }
                </span>
              </p>
              <p className=" p-2 bg-blue-400 text-white w-auto">
                Expiration Date: <span>2023/03/02 </span>
              </p>
            </div>
          </div>
        </section>
        {/* TABLE */}

        <section className=" mt-2">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs  uppercase bg-blue-400 text-white ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  PRODUCT
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  GST
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 bg-white">
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Roller Blinders
                </th>
                <td className="px-6 py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit numquam
                </td>
                <td className="px-6 py-4">GST</td>
                <td className="px-6 py-4">2999</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* total secctonn */}
        <section className=" flex text-sm font-medium justify-between py-3 border-b-4">
          <div className="w-1/2"></div>
          <div className=" w-64 gap-y-3 flex flex-col">
            <div className="flex justify-between">
              <p>SUBTOTAL</p>
              <p>1212</p>
            </div>
            <div className="flex justify-between">
              <p>GST TOTAL</p>
              <p>2000</p>
            </div>
            <div className="flex justify-between text-lg bg-blue-400 p-2 text-white">
              <p>TOTAL</p>
              <p>A$ 2000</p>
            </div>
          </div>
        </section>

        {/* bass */}
        <section className=" my-3">
          <p className="text-sm">Bass Summary</p>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs  uppercase bg-blue-400 text-white ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  RATE
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  GST
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  NET
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 bg-white">
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  GST @10%
                </th>
                <td className="px-6 py-4">1212</td>
                <td className="px-6 py-4">12121</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* send the email */}
      <section className=" mt-5">
        <h1 className="font-bold text-lg">Send the quotation email</h1>
        <p className=" text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          perspiciatis minima tempora cumque deserunt dolorem dolore iure
          reprehenderit, aliquid quos eos animi suscipit inventore provident
          eius tenetur earum at distinctio.
        </p>
        <div className="flex flex-col mt-5">
          <h1>Customer Email Address</h1>
          <input
            className=" border px-2 py-2 border-slate-500 rounded-md mt-3 w-2/3"
            placeholder="Customer email"
            value={customerEmail}
          />

          <button className=" bg-blue-600 text-white px-3 py-2 rounded-md mt-3 w-40 hover:bg-blue-700 ease-in-out">
            Send Quotation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewComponent;
