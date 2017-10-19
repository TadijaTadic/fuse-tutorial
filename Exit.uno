using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;

using Uno.Compiler.ExportTargetInterop;

public class Exit : NativeModule
{
	public Exit()
	{
		AddMember(new NativeFunction("exit", (NativeCallback)exitApp));
	}

	object exitApp(Context c, object[] args)
	{
		exitApp();

		return null;
	}

	[Foreign(Language.Java)]
	static extern(Android) void exitApp()
	@{
		android.content.Intent callIntent = new android.content.Intent(android.content.Intent.ACTION_MAIN);
		callIntent.addCategory(android.content.Intent.CATEGORY_HOME);
		callIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);

		android.app.Activity a = @(Activity.Package).@(Activity.Name).GetRootActivity();
		a.startActivity(callIntent);
	@}

	static extern(!Android) void exitApp()
	{
		debug_log("Not suported");
	}
}
