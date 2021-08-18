using StreamDeckLib;
using StreamDeckLib.Messages;
using System.Diagnostics;
using System.Threading.Tasks;

namespace StreamdeckPluginTrionesBleLights
{
	[ActionUuid(Uuid = "com.khundar.streamdecktrionesblelights.DefaultPluginAction")]
	public class StreamdeckPluginTrionesBleLightsAction : BaseStreamDeckActionWithSettingsModel<Models.TrionesBLESettingsModel>
	{
		public override async Task OnKeyUp(StreamDeckEventPayload args)
		{

			//await Manager.SetTitleAsync(args.context, SettingsModel.Name);
			ProcessStartInfo processInfo;
			Process process;
			string sshconnect = "ssh pi@192.168.0.73";
			string bashCmd = "\"" + " sudo bash ./RedRoom/BLELightCtrl/LightCtrl.sh -c "+ SettingsModel.Color + " -l "+ SettingsModel.LightMacAddr + "\"";
			processInfo = new ProcessStartInfo("cmd.exe", "/c " + sshconnect + " " + bashCmd);
			processInfo.CreateNoWindow = true;
			processInfo.UseShellExecute = false;
			processInfo.RedirectStandardError = true;
			processInfo.RedirectStandardOutput = true;

			process = Process.Start(processInfo);
			process.WaitForExit();
			process.Close();


			//update settings
			await Manager.SetSettingsAsync(args.context, SettingsModel);
		}

		public override async Task OnDidReceiveSettings(StreamDeckEventPayload args)
		{
			await base.OnDidReceiveSettings(args);
			//await Manager.SetTitleAsync(args.context, SettingsModel.Name);
		}

		public override async Task OnWillAppear(StreamDeckEventPayload args)
		{
			await base.OnWillAppear(args);
			//await Manager.SetTitleAsync(args.context, SettingsModel.Name);
		}

	}
}
