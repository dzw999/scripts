[MITM]
hostname = *.toutiaoapi.com,*.zijieapi.com
[Script]
http-request luckycat/lite/v1/withdraw/withdraw url script-path=https://raw.githubusercontent.com/bluesmallpig/scripts/main/jrtt.js , requires-body=1
http-request luckycat/lite/v1/activity/done_whole_scene_task url script-path=https://raw.githubusercontent.com/bluesmallpig/scripts/main/jrtt.js, requires-body=1
http-request v1/task.+(open_treasure_box|excitation_ad) script-path=https://raw.githubusercontent.com/bluesmallpig/scripts/main/jrtt.js, requires-body=1
