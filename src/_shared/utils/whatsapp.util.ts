export class WhatsAppUtil {
  public static readonly contacts = {
    service: "5511988417760",
  };

  public static buildLink(phone: string, message: string) {
    return `http://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  }
}
