namespace StreamdeckPluginTrionesBleLights.Models
{
	public class TrionesBLESettingsModel
	{
		public string Switch { get; set; } = "000000";

		private string _color;

		public string Brightness { get; set; } = "";
		public string LightMacAddr { get; set; } = "xx:xx:xx:xx:xx:xx";

		public string Color
        {
            get
            {
				return (this.Switch == "cc2433" || this.Switch == "000000") ? "000000" : _color;
            }
            set
            {
				_color = value;
            }
        }
	}
}
