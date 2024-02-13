import Container from "@/components/Container";
import HeaderGuest from "@/components/HeaderGuest";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderGuest />
      <Container className="py-16 flex justify-center">{children}</Container>
    </>
  );
}
