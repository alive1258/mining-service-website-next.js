import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_PHONE, OPEN_HOURS } from "@/src/components/Shared/Navbar/menuItems";

const CONTACT_EMAIL = "info@minvip.com";
const OFFICE_ADDRESS = "North Star Ave, Perth, AU";

const INFO_ITEMS = [
  { icon: Phone, label: "Call Us", value: CONTACT_PHONE },
  { icon: Mail, label: "Email Us", value: CONTACT_EMAIL },
  { icon: MapPin, label: "Visit Us", value: OFFICE_ADDRESS },
  { icon: Clock, label: "Site Hours", value: OPEN_HOURS },
];

const ContactInfoCards = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="container grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
        {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-[20px] border border-white/10 bg-ink-800 p-6 sm:p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10">
              <Icon size={19} className="text-lime-400" strokeWidth={1.8} />
            </div>
            <div className="text-[13.5px] font-semibold text-white">{label}</div>
            <div className="mt-1 text-[13px] text-white/50">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;
