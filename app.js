const CASES = [{"scenario_id":"C001","case_file":"C001_low_very_high.csv","security_profile":"LOW","resource_profile":"VERY_HIGH","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":98,"cpu_pct":10,"ram_kb":220,"network_quality":0.98,"latency_ms":15,"packet_loss_pct":0.1},{"scenario_id":"C002","case_file":"C002_low_high.csv","security_profile":"LOW","resource_profile":"HIGH","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C003","case_file":"C003_low_good.csv","security_profile":"LOW","resource_profile":"GOOD","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":75,"cpu_pct":30,"ram_kb":160,"network_quality":0.8,"latency_ms":35,"packet_loss_pct":0.8},{"scenario_id":"C004","case_file":"C004_low_medium.csv","security_profile":"LOW","resource_profile":"MEDIUM","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C005","case_file":"C005_low_low.csv","security_profile":"LOW","resource_profile":"LOW","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":35,"cpu_pct":65,"ram_kb":90,"network_quality":0.5,"latency_ms":90,"packet_loss_pct":3},{"scenario_id":"C006","case_file":"C006_low_critical.csv","security_profile":"LOW","resource_profile":"CRITICAL","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":15,"cpu_pct":85,"ram_kb":50,"network_quality":0.25,"latency_ms":180,"packet_loss_pct":8},{"scenario_id":"C007","case_file":"C007_moderate_very_high.csv","security_profile":"MODERATE","resource_profile":"VERY_HIGH","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":98,"cpu_pct":10,"ram_kb":220,"network_quality":0.98,"latency_ms":15,"packet_loss_pct":0.1},{"scenario_id":"C008","case_file":"C008_moderate_high.csv","security_profile":"MODERATE","resource_profile":"HIGH","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C009","case_file":"C009_moderate_good.csv","security_profile":"MODERATE","resource_profile":"GOOD","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":75,"cpu_pct":30,"ram_kb":160,"network_quality":0.8,"latency_ms":35,"packet_loss_pct":0.8},{"scenario_id":"C010","case_file":"C010_moderate_medium.csv","security_profile":"MODERATE","resource_profile":"MEDIUM","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C011","case_file":"C011_moderate_low.csv","security_profile":"MODERATE","resource_profile":"LOW","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":35,"cpu_pct":65,"ram_kb":90,"network_quality":0.5,"latency_ms":90,"packet_loss_pct":3},{"scenario_id":"C012","case_file":"C012_moderate_critical.csv","security_profile":"MODERATE","resource_profile":"CRITICAL","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":15,"cpu_pct":85,"ram_kb":50,"network_quality":0.25,"latency_ms":180,"packet_loss_pct":8},{"scenario_id":"C013","case_file":"C013_high_very_high.csv","security_profile":"HIGH","resource_profile":"VERY_HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":768,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"REJECT","xgb_decision":"APPLY","dt_final":1024,"rf_final":null,"xgb_final":1024,"model_agreement":"NO","battery_pct":98,"cpu_pct":10,"ram_kb":220,"network_quality":0.98,"latency_ms":15,"packet_loss_pct":0.1},{"scenario_id":"C014","case_file":"C014_high_high.csv","security_profile":"HIGH","resource_profile":"HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":1024,"rf_final":1024,"xgb_final":1024,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C015","case_file":"C015_high_good.csv","security_profile":"HIGH","resource_profile":"GOOD","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":75,"cpu_pct":30,"ram_kb":160,"network_quality":0.8,"latency_ms":35,"packet_loss_pct":0.8},{"scenario_id":"C016","case_file":"C016_high_medium.csv","security_profile":"HIGH","resource_profile":"MEDIUM","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C017","case_file":"C017_high_low.csv","security_profile":"HIGH","resource_profile":"LOW","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":35,"cpu_pct":65,"ram_kb":90,"network_quality":0.5,"latency_ms":90,"packet_loss_pct":3},{"scenario_id":"C018","case_file":"C018_high_critical.csv","security_profile":"HIGH","resource_profile":"CRITICAL","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":15,"cpu_pct":85,"ram_kb":50,"network_quality":0.25,"latency_ms":180,"packet_loss_pct":8},{"scenario_id":"C019","case_file":"C019_confidentiality_high.csv","security_profile":"CONFIDENTIALITY_HIGH","resource_profile":"HIGH","security_score":1.6,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C020","case_file":"C020_integrity_high.csv","security_profile":"INTEGRITY_HIGH","resource_profile":"HIGH","security_score":1.6,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C021","case_file":"C021_availability_high.csv","security_profile":"AVAILABILITY_HIGH","resource_profile":"HIGH","security_score":1.6,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C022","case_file":"C022_data_sensitivity_high.csv","security_profile":"DATA_SENSITIVITY_HIGH","resource_profile":"HIGH","security_score":1.3,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C023","case_file":"C023_criticality_high.csv","security_profile":"CRITICALITY_HIGH","resource_profile":"HIGH","security_score":1.3,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C024","case_file":"C024_threat_high.csv","security_profile":"THREAT_HIGH","resource_profile":"HIGH","security_score":1.3,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C025","case_file":"C025_network_high.csv","security_profile":"NETWORK_HIGH","resource_profile":"HIGH","security_score":1.2,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C026","case_file":"C026_lifetime_high.csv","security_profile":"LIFETIME_HIGH","resource_profile":"HIGH","security_score":1.3,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C027","case_file":"C027_c_i_high.csv","security_profile":"C_I_HIGH","resource_profile":"HIGH","security_score":1.6,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C028","case_file":"C028_c_data_high.csv","security_profile":"C_DATA_HIGH","resource_profile":"HIGH","security_score":1.9,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C029","case_file":"C029_threat_network_high.csv","security_profile":"THREAT_NETWORK_HIGH","resource_profile":"HIGH","security_score":1.5,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C030","case_file":"C030_all_security_high.csv","security_profile":"ALL_SECURITY_HIGH","resource_profile":"HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":1024,"rf_final":1024,"xgb_final":1024,"model_agreement":"YES","battery_pct":90,"cpu_pct":20,"ram_kb":190,"network_quality":0.9,"latency_ms":20,"packet_loss_pct":0.2},{"scenario_id":"C031","case_file":"C031_battery_boundary_20.csv","security_profile":"MODERATE","resource_profile":"BATTERY_BOUNDARY_20","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":20,"cpu_pct":40,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C032","case_file":"C032_battery_boundary_30.csv","security_profile":"MODERATE","resource_profile":"BATTERY_BOUNDARY_30","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":30,"cpu_pct":50,"ram_kb":120,"network_quality":0.65,"latency_ms":55,"packet_loss_pct":2},{"scenario_id":"C033","case_file":"C033_ram_boundary_70.csv","security_profile":"MODERATE","resource_profile":"RAM_BOUNDARY_70","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":60,"cpu_pct":50,"ram_kb":70,"network_quality":0.7,"latency_ms":55,"packet_loss_pct":2},{"scenario_id":"C034","case_file":"C034_ram_boundary_95.csv","security_profile":"MODERATE","resource_profile":"RAM_BOUNDARY_95","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":60,"cpu_pct":55,"ram_kb":95,"network_quality":0.65,"latency_ms":60,"packet_loss_pct":2.5},{"scenario_id":"C035","case_file":"C035_cpu_high_network_good.csv","security_profile":"MODERATE","resource_profile":"CPU_HIGH_NETWORK_GOOD","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":1024,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"FALLBACK","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"NO","battery_pct":60,"cpu_pct":90,"ram_kb":130,"network_quality":0.85,"latency_ms":35,"packet_loss_pct":0.5},{"scenario_id":"C036","case_file":"C036_cpu_low_ram_low.csv","security_profile":"MODERATE","resource_profile":"CPU_LOW_RAM_LOW","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":70,"cpu_pct":20,"ram_kb":60,"network_quality":0.8,"latency_ms":35,"packet_loss_pct":0.8},{"scenario_id":"C037","case_file":"C037_latency_high.csv","security_profile":"MODERATE","resource_profile":"LATENCY_HIGH","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":65,"cpu_pct":45,"ram_kb":130,"network_quality":0.8,"latency_ms":140,"packet_loss_pct":1},{"scenario_id":"C038","case_file":"C038_packet_loss_high.csv","security_profile":"MODERATE","resource_profile":"PACKET_LOSS_HIGH","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":65,"cpu_pct":45,"ram_kb":130,"network_quality":0.65,"latency_ms":60,"packet_loss_pct":7},{"scenario_id":"C039","case_file":"C039_network_very_poor.csv","security_profile":"MODERATE","resource_profile":"NETWORK_VERY_POOR","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":65,"cpu_pct":45,"ram_kb":130,"network_quality":0.2,"latency_ms":220,"packet_loss_pct":9},{"scenario_id":"C040","case_file":"C040_balanced_mid.csv","security_profile":"MODERATE","resource_profile":"BALANCED_MID","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":52,"cpu_pct":52,"ram_kb":105,"network_quality":0.6,"latency_ms":70,"packet_loss_pct":2.5},{"scenario_id":"C041","case_file":"C041_score_1_70.csv","security_profile":"SCORE_1_70","resource_profile":"MEDIUM","security_score":1.7,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C042","case_file":"C042_score_1_75_exact.csv","security_profile":"SCORE_1_75_EXACT","resource_profile":"MEDIUM","security_score":1.75,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C043","case_file":"C043_score_1_80.csv","security_profile":"SCORE_1_80","resource_profile":"MEDIUM","security_score":1.8,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C044","case_file":"C044_score_2_40.csv","security_profile":"SCORE_2_40","resource_profile":"MEDIUM","security_score":2.4,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C045","case_file":"C045_score_2_45_exact.csv","security_profile":"SCORE_2_45_EXACT","resource_profile":"MEDIUM","security_score":2.45,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C046","case_file":"C046_score_2_50.csv","security_profile":"SCORE_2_50","resource_profile":"MEDIUM","security_score":2.5,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C047","case_file":"C047_score_2_55.csv","security_profile":"SCORE_2_55","resource_profile":"MEDIUM","security_score":2.5,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C048","case_file":"C048_score_2_60.csv","security_profile":"SCORE_2_60","resource_profile":"MEDIUM","security_score":2.45,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C049","case_file":"C049_score_2_70.csv","security_profile":"SCORE_2_70","resource_profile":"MEDIUM","security_score":2.75,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C050","case_file":"C050_score_3_plus.csv","security_profile":"SCORE_3_PLUS","resource_profile":"MEDIUM","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":55,"cpu_pct":45,"ram_kb":120,"network_quality":0.7,"latency_ms":50,"packet_loss_pct":1.5},{"scenario_id":"C051","case_file":"C051_model_candidate_01.csv","security_profile":"LOW","resource_profile":"MODEL_TEST","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":95,"cpu_pct":12,"ram_kb":205,"network_quality":0.95,"latency_ms":18,"packet_loss_pct":0.1},{"scenario_id":"C052","case_file":"C052_model_candidate_02.csv","security_profile":"MODERATE","resource_profile":"MODEL_TEST","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":768,"rf_prediction":768,"xgb_prediction":768,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":768,"rf_final":768,"xgb_final":768,"model_agreement":"YES","battery_pct":82,"cpu_pct":27,"ram_kb":175,"network_quality":0.86,"latency_ms":28,"packet_loss_pct":0.5},{"scenario_id":"C053","case_file":"C053_model_candidate_03.csv","security_profile":"HIGH","resource_profile":"MODEL_TEST","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":68,"cpu_pct":38,"ram_kb":145,"network_quality":0.77,"latency_ms":42,"packet_loss_pct":1},{"scenario_id":"C054","case_file":"C054_model_candidate_04.csv","security_profile":"LOW","resource_profile":"MODEL_TEST","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":512,"rf_prediction":512,"xgb_prediction":512,"dt_decision":"APPLY","rf_decision":"APPLY","xgb_decision":"APPLY","dt_final":512,"rf_final":512,"xgb_final":512,"model_agreement":"YES","battery_pct":58,"cpu_pct":48,"ram_kb":115,"network_quality":0.69,"latency_ms":58,"packet_loss_pct":1.8},{"scenario_id":"C055","case_file":"C055_model_candidate_05.csv","security_profile":"MODERATE","resource_profile":"MODEL_TEST","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":48,"cpu_pct":55,"ram_kb":100,"network_quality":0.61,"latency_ms":72,"packet_loss_pct":2.6},{"scenario_id":"C056","case_file":"C056_model_candidate_06.csv","security_profile":"HIGH","resource_profile":"MODEL_TEST","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":42,"cpu_pct":62,"ram_kb":88,"network_quality":0.57,"latency_ms":80,"packet_loss_pct":3.2},{"scenario_id":"C057","case_file":"C057_model_candidate_07.csv","security_profile":"LOW","resource_profile":"MODEL_TEST","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":32,"cpu_pct":70,"ram_kb":78,"network_quality":0.48,"latency_ms":95,"packet_loss_pct":4},{"scenario_id":"C058","case_file":"C058_model_candidate_08.csv","security_profile":"MODERATE","resource_profile":"MODEL_TEST","security_score":2,"required_security_level":3,"eligible_512":"NO","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":26,"cpu_pct":76,"ram_kb":68,"network_quality":0.42,"latency_ms":115,"packet_loss_pct":5.2},{"scenario_id":"C059","case_file":"C059_model_candidate_09.csv","security_profile":"HIGH","resource_profile":"MODEL_TEST","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":19,"cpu_pct":83,"ram_kb":55,"network_quality":0.31,"latency_ms":150,"packet_loss_pct":6.5},{"scenario_id":"C060","case_file":"C060_model_candidate_10.csv","security_profile":"LOW","resource_profile":"MODEL_TEST","security_score":1,"required_security_level":1,"eligible_512":"YES","eligible_768":"YES","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":1024,"xgb_prediction":1024,"dt_decision":"REJECT","rf_decision":"REJECT","xgb_decision":"REJECT","dt_final":null,"rf_final":null,"xgb_final":null,"model_agreement":"YES","battery_pct":14,"cpu_pct":89,"ram_kb":48,"network_quality":0.24,"latency_ms":210,"packet_loss_pct":9},{"scenario_id":"C061","case_file":"C061_high_very_high_var.csv","security_profile":"HIGH","resource_profile":"VERY_HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":768,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"REJECT","xgb_decision":"APPLY","dt_final":1024,"rf_final":null,"xgb_final":1024,"model_agreement":"NO","battery_pct":95,"cpu_pct":9,"ram_kb":214,"network_quality":0.98,"latency_ms":10,"packet_loss_pct":0.1},{"scenario_id":"C062","case_file":"C062_high_very_high_var.csv","security_profile":"HIGH","resource_profile":"VERY_HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":768,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"REJECT","xgb_decision":"APPLY","dt_final":1024,"rf_final":null,"xgb_final":1024,"model_agreement":"NO","battery_pct":98,"cpu_pct":10,"ram_kb":213,"network_quality":0.98,"latency_ms":11,"packet_loss_pct":0.1},{"scenario_id":"C063","case_file":"C063_high_very_high_var.csv","security_profile":"HIGH","resource_profile":"VERY_HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":768,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"REJECT","xgb_decision":"APPLY","dt_final":1024,"rf_final":null,"xgb_final":1024,"model_agreement":"NO","battery_pct":100,"cpu_pct":5,"ram_kb":218,"network_quality":0.98,"latency_ms":12,"packet_loss_pct":0.1},{"scenario_id":"C064","case_file":"C064_high_very_high_var.csv","security_profile":"HIGH","resource_profile":"VERY_HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":768,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"REJECT","xgb_decision":"APPLY","dt_final":1024,"rf_final":null,"xgb_final":1024,"model_agreement":"NO","battery_pct":95,"cpu_pct":12,"ram_kb":208,"network_quality":0.98,"latency_ms":13,"packet_loss_pct":0.1},{"scenario_id":"C065","case_file":"C065_high_very_high_var.csv","security_profile":"HIGH","resource_profile":"VERY_HIGH","security_score":3,"required_security_level":5,"eligible_512":"NO","eligible_768":"NO","eligible_1024":"YES","dt_prediction":1024,"rf_prediction":768,"xgb_prediction":1024,"dt_decision":"APPLY","rf_decision":"REJECT","xgb_decision":"APPLY","dt_final":1024,"rf_final":null,"xgb_final":1024,"model_agreement":"NO","battery_pct":97,"cpu_pct":5,"ram_kb":230,"network_quality":0.98,"latency_ms":18,"packet_loss_pct":0.1}];
const FEATURED = ["C001", "C007", "C013", "C035", "C018"];

const BENCH = {
  512:{time:4.20,energy:5.60,ram:52},
  768:{time:7.40,energy:8.90,ram:70},
  1024:{time:10.60,energy:13.10,ram:94}
};
const STAGES = [
  ['01','Resource Monitoring','Read battery, CPU, RAM, network state.'],
  ['02','Security Assessment','Compute score and minimum required security level.'],
  ['03','Security Filter','Block parameter sets below the required level.'],
  ['04','Resource Evaluation','Compare benchmark cost and feasibility of eligible candidates.'],
  ['05','ML Prediction','Generate recommendations from DT, RF and XGBoost.'],
  ['06','Final Validation','Reject recommendations that violate security or feasibility rules.'],
  ['07','Configuration','Expose APPLY, FALLBACK or REJECT.']
];

const $ = (s)=>document.querySelector(s);
let runToken=0;
let selectedCandidate=null;

function currentCase(){
  const val=$('#case-select').value;
  if (!val) return CASES[0]; // fallback safely
  return CASES.find(c=>c.scenario_id === val) || CASES[0];
}
function friendlyName(c){
  return `${c.security_profile} • ${c.resource_profile}`;
}
function outcomeClass(v){
  return v==='APPLY'?'apply':v==='FALLBACK'?'fallback':'reject';
}
function allRejected(c){return [c.dt_decision,c.rf_decision,c.xgb_decision].every(v=>v==='REJECT')}
function hasApply(c){return [c.dt_decision,c.rf_decision,c.xgb_decision].includes('APPLY')}
function hasFallback(c){return [c.dt_decision,c.rf_decision,c.xgb_decision].includes('FALLBACK')}
function modelDisagree(c){return c.dt_prediction!==c.rf_prediction || c.dt_prediction!==c.xgb_prediction}
function requiredName(level){return level===1?'Low':level===3?'Moderate':'High'}
function securityFactors(c){
  const keys=['Confidentiality','Integrity','Availability','Data Sensitivity','Criticality','Threat Exposure','Network Exposure','Security Lifetime'];
  let vals=Object.fromEntries(keys.map(k=>[k,1]));
  const p=String(c.security_profile||'').toUpperCase();
  if(p==='MODERATE') Object.keys(vals).forEach(k=>vals[k]=2);
  else if(p==='HIGH' || p==='ALL_SECURITY_HIGH') Object.keys(vals).forEach(k=>vals[k]=3);
  if(p.includes('CONFIDENTIALITY')) vals['Confidentiality']=3;
  if(p.includes('INTEGRITY')) vals['Integrity']=3;
  if(p.includes('AVAILABILITY')) vals['Availability']=3;
  if(p.includes('DATA_SENSITIVITY')) vals['Data Sensitivity']=3;
  if(p.includes('CRITICALITY')) vals['Criticality']=3;
  if(p.includes('THREAT')) vals['Threat Exposure']=3;
  if(p.includes('NETWORK')) vals['Network Exposure']=3;
  if(p.includes('LIFETIME')) vals['Security Lifetime']=3;
  if(p.includes('C_I_HIGH')){vals['Confidentiality']=3;vals['Integrity']=3}
  if(p.includes('C_DATA_HIGH')){vals['Confidentiality']=3;vals['Data Sensitivity']=3}
  if(p.includes('THREAT_NETWORK_HIGH')){vals['Threat Exposure']=3;vals['Network Exposure']=3}
  return vals;
}
function eligible(c,level){return c[`eligible_${level}`]==='YES'}
function feasibility(c,level){
  if(!eligible(c,level)) return 'SECURITY-BLOCKED';
  // Prototype feasibility profile used by the previous offline replay engine.
  if(c.latency_ms>100 || c.packet_loss_pct>4) return 'RESOURCE-BLOCKED';
  if(level===512) return 'FEASIBLE';
  if(level===768 && (c.battery_pct<20 || c.ram_kb<70)) return 'RESOURCE-BLOCKED';
  if(level===1024 && (c.battery_pct<20 || c.ram_kb<94)) return 'RESOURCE-BLOCKED';
  return 'FEASIBLE';
}
function candidateStatusClass(status){return status==='FEASIBLE'?'ok':status==='RESOURCE-BLOCKED'?'warn':'bad'}
function finalFor(c,key){return c[`${key}_decision`] || 'REJECT'}
function predictionFor(c,key){return c[`${key}_prediction`]}
function finalLevel(c,key){return c[`${key}_final`]}

function renderCaseSelect(){
  const defaultOption = `<option value="" disabled selected>Select a Scenario...</option>`;
  const html=CASES.map(c=>`<option value="${c.scenario_id}">${c.scenario_id} — ${friendlyName(c)}</option>`).join('');
  $('#case-select').innerHTML=defaultOption + html;
}

function stageDetails(c){
  const elig=[512,768,1024].filter(l=>eligible(c,l));
  const blocked=[512,768,1024].filter(l=>!eligible(c,l));
  const preds=`DT ${c.dt_prediction} · RF ${c.rf_prediction} · XGB ${c.xgb_prediction}`;
  const finals=`DT ${finalFor(c,'dt')} · RF ${finalFor(c,'rf')} · XGB ${finalFor(c,'xgb')}`;
  const stage7 = allRejected(c) ? 'REJECT all' : hasFallback(c) ? 'FALLBACK present' : 'APPLY available';
  return [
    `${c.battery_pct}% batt · ${c.cpu_pct}% CPU · ${c.ram_kb} KB RAM`,
    `Score ${Number(c.security_score).toFixed(2)} → Level ${c.required_security_level}`,
    `Eligible: ${elig.join('/')} · Blocked: ${blocked.length?blocked.join('/'): 'none'}`,
    `512 / 768 / 1024 benchmark checked`,
    preds,
    finals,
    stage7
  ];
}
function renderStageRail(activeIndex=7, running=false){
  if (!$('#stage-list')) return;
  const c=currentCase();
  const details=stageDetails(c);
  $('#stage-list').innerHTML=STAGES.map((s,i)=>{
    const cls=i<activeIndex?'done':(running && i===activeIndex?'running':'');
    const status=i<activeIndex?'DONE':(running&&i===activeIndex?'RUN':'READY');
    return `<button class="stage-item ${cls} ${i===selectedCandidate?'active':''}" data-stage="${i}"><div class="stage-top"><span class="stage-num">${s[0]}</span><span class="stage-name">${s[1]}</span><span class="stage-status">${status}</span></div><div class="stage-detail">${details[i]}</div></button>`
  }).join('');
  document.querySelectorAll('.stage-item').forEach(el=>el.addEventListener('click',()=>{
    const i=Number(el.dataset.stage);
    const ids=['stage-resource','stage-security-detail','stage-filter','stage-eval','stage-ml','stage-validation','stage-decision-detail'];
    const target=document.getElementById(ids[i]);
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  }));
  $('#rail-progress-bar').style.width=`${(Math.min(activeIndex,7)/7)*100}%`;
}

function renderResource(c){
  const items=[['Battery',`${c.battery_pct}%`],['CPU Utilization',`${c.cpu_pct}%`],['Available RAM',`${c.ram_kb} KB`],['Network Quality',Number(c.network_quality).toFixed(2)],['Latency',`${c.latency_ms} ms`],['Packet Loss',`${c.packet_loss_pct}%`]];
  $('#resource-grid').innerHTML=items.map(x=>`<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div></div>`).join('');
  $('#stat-battery').textContent=`${c.battery_pct}%`; $('#stat-ram').textContent=c.ram_kb; $('#battery-bar').style.width=`${Math.max(0,Math.min(100,c.battery_pct))}%`;
}
function renderSecurity(c){
  $('#stat-level').textContent=`Level ${c.required_security_level}`; $('#stat-score').textContent=`Security score ${Number(c.security_score).toFixed(2)}`;
  $('#score-circle').textContent=Number(c.security_score).toFixed(2);
  $('#score-title').textContent=`${requiredName(c.required_security_level)} security requirement`;
  $('#security-profile-text').textContent=`Profile: ${c.security_profile}`;
  const vals=securityFactors(c);
  $('#factor-list').innerHTML=Object.entries(vals).map(([k,v])=>`<div class="factor"><span>${k}</span><b>${v}/3</b></div>`).join('');
}
function renderFilter(c){
  $('#filter-summary').innerHTML=[512,768,1024].map(level=>{
    const ok=eligible(c,level); const category=level===512?1:level===768?3:5;
    return `<div class="filter-card"><h3>ML-KEM-${level}</h3><div class="muted">NIST Category ${category}</div><span class="tag ${ok?'ok':'bad'}">${ok?'SECURITY-ELIGIBLE':'SECURITY-BLOCKED'}</span></div>`
  }).join('');
}
function renderCandidates(c){
  $('#candidate-grid').innerHTML=[512,768,1024].map(level=>{
    const cost=BENCH[level]; const status=feasibility(c,level); const width=Math.min(100,cost.time*7);
    const selected=selectedCandidate===level?'selected':'';
    return `<div class="candidate ${selected}" data-level="${level}"><h3>ML-KEM-${level}</h3><div class="level">Category ${level===512?1:level===768?3:5}</div><div class="candidate-status ${candidateStatusClass(status)}">${status}</div><div class="bar-row"><div class="bar-label"><span>Time</span><span>${cost.time.toFixed(2)} ms</span></div><div class="tiny-bar"><span style="width:${width}%"></span></div></div><div class="bar-row"><div class="bar-label"><span>Energy</span><span>${cost.energy.toFixed(2)} mJ</span></div><div class="tiny-bar"><span style="width:${Math.min(100,cost.energy*5)}%"></span></div></div><div class="bar-row"><div class="bar-label"><span>Peak RAM</span><span>${cost.ram} KB</span></div><div class="tiny-bar"><span style="width:${Math.min(100,cost.ram/1.2)}%"></span></div></div><div class="selected-note">Click to inspect this candidate.</div></div>`
  }).join('');
  document.querySelectorAll('.candidate').forEach(el=>el.addEventListener('click',()=>{selectedCandidate=Number(el.dataset.level);renderCandidates(c)}));
}
function renderModels(c){
  const models=[['Decision Tree','dt'],['Random Forest','rf'],['XGBoost','xgb']];
  $('#model-grid').innerHTML=models.map(m=>{const p=predictionFor(c,m[1]); const d=finalFor(c,m[1]);return `<div class="model-card" data-model="${m[1]}"><div class="model-name">${m[0]}</div><div class="model-pred">ML-KEM-${p}</div><div class="model-decision ${d==='APPLY'?'ok':d==='FALLBACK'?'warn':'bad'}">${d}${d==='REJECT'?' · blocked by validation':d==='FALLBACK'?' · fallback path':''}</div></div>`}).join('');
  document.querySelectorAll('.model-card').forEach(el=>el.addEventListener('click',()=>{document.querySelectorAll('.model-card').forEach(x=>x.classList.remove('highlight'));el.classList.add('highlight')}));
}
function renderValidation(c){
  const models=[['Decision Tree','dt'],['Random Forest','rf'],['XGBoost','xgb']];
  $('#validation-grid').innerHTML=models.map(m=>{const p=predictionFor(c,m[1]);const d=finalFor(c,m[1]);const f=finalLevel(c,m[1]);const reason=d==='APPLY'?`Predicted level ${p} passes the recorded final decision.`:d==='FALLBACK'?`Predicted level ${p} triggers fallback under the recorded replay rule.`:`Predicted level ${p} did not pass the final validation path.`;return `<div class="validation-card"><div class="validation-top"><div class="model-name">${m[0]}</div><span class="decision-pill ${outcomeClass(d)}">${d}</span></div><div class="validation-text">Prediction: ML-KEM-${p}<br/>${f?`Final level: ML-KEM-${f}<br/>`:''}${reason}</div></div>`}).join('');
}
function renderDecision(c){
  const dts=[finalFor(c,'dt'),finalFor(c,'rf'),finalFor(c,'xgb')];
  const finalOutcome=dts.includes('APPLY')?'APPLY':dts.includes('FALLBACK')?'FALLBACK':'REJECT';
  const applied=(c.dt_final||c.rf_final||c.xgb_final);
  const selected=applied?`ML-KEM-${Number(applied)}`:finalOutcome==='REJECT'?'No configuration applied':'Fallback path';
  $('#hero-decision').textContent=selected; $('#hero-reason').textContent=caseReason(c);
  const badge=$('#hero-badge');badge.textContent=finalOutcome;badge.className=`decision-badge ${outcomeClass(finalOutcome)}`;
  $('#decision-output').innerHTML=`<div><div class="decision-main ${outcomeClass(finalOutcome)}">${selected}</div><div class="decision-meta">${c.scenario_id} · ${friendlyName(c)} · security requirement ${c.required_security_level}</div></div><div class="decision-meta">Recorded model outputs: DT ${finalFor(c,'dt')} · RF ${finalFor(c,'rf')} · XGB ${finalFor(c,'xgb')}</div>`;
}
function caseReason(c){
  if(c.scenario_id==='C013') return 'RF recommends 768 while Level 5 is required; final validation rejects that recommendation.';
  if(c.scenario_id==='C035') return 'RF takes the fallback path while DT and XGBoost remain on the direct recommendation path.';
  if(allRejected(c)) return 'All recorded model paths end in REJECT for this resource/security state.';
  if(c.required_security_level===3 && c.dt_prediction===768) return '512 is filtered out; the models select the next security-compliant level, 768.';
  if(c.required_security_level===5 && c.dt_prediction===1024) return 'Level 5 is required, so only ML-KEM-1024 remains security-eligible.';
  return `Recorded result for ${c.scenario_id} under the replayed resource/security state.`;
}
function renderAll(c){
  const emptyState = document.getElementById('empty-state');
  const dashContent = document.getElementById('dashboard-content');
  if (emptyState) emptyState.style.display = 'none';
  if (dashContent) dashContent.style.display = 'block';
  
  renderResource(c); renderSecurity(c); renderFilter(c); renderCandidates(c); renderModels(c); renderValidation(c); renderDecision(c); renderStageRail(7,false);
}

function animateRun(){
  const c = currentCase();
  selectedCandidate = null;
  const btn = $('#run-btn');
  const dashContent = document.querySelector('.dashboard-content');
  
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span style="display:flex; align-items:center; justify-content:center; gap:8px"><svg style="width:16px;height:16px;animation:spin 1s linear infinite" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="32" stroke-opacity="0.3"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg> Executing...</span>`;
    btn.style.boxShadow = "0 0 15px var(--accent)";
  }
  
  if (dashContent) dashContent.classList.add('processing');

  setTimeout(() => {
    if (dashContent) dashContent.classList.remove('processing');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `Run Scenario`;
      btn.style.boxShadow = "";
    }
    renderAll(c);
  }, 800);
}
function populateCaseView(){
  const list=CASES;
  const query=$('#case-search').value.trim().toLowerCase(); const sf=$('#security-filter').value; const rf=$('#result-filter').value;
  const filtered=list.filter(c=>{
    const hay=`${c.scenario_id} ${c.security_profile} ${c.resource_profile} ${c.case_file}`.toLowerCase();
    const secOk=sf==='ALL'||(sf==='OTHER'?['LOW','MODERATE','HIGH'].indexOf(c.security_profile)<0:c.security_profile===sf);
    let resultOk=true; if(rf==='APPLY') resultOk=hasApply(c); if(rf==='FALLBACK') resultOk=hasFallback(c); if(rf==='REJECT') resultOk=allRejected(c); if(rf==='DISAGREE') resultOk=modelDisagree(c);
    return hay.includes(query)&&secOk&&resultOk;
  });
  $('#cases-count').textContent=`Showing ${filtered.length} of ${list.length} cases`;
  $('#all-case-grid').innerHTML=filtered.map(c=>{
    const outcome=hasApply(c)?'APPLY':hasFallback(c)?'FALLBACK':'REJECT';
    const disagree=modelDisagree(c)?'<span class="tag-small">MODEL DISAGREEMENT</span>':'';
    return `<article class="all-case" data-id="${c.scenario_id}"><div class="all-case-top"><div><div class="case-id">${c.scenario_id}</div><div class="case-title">${friendlyName(c)}</div></div><span class="decision-pill ${outcomeClass(outcome)}">${outcome}</span></div><div class="case-meta"><span class="tag-small">Level ${c.required_security_level}</span><span class="tag-small">B ${c.battery_pct}%</span><span class="tag-small">RAM ${c.ram_kb} KB</span>${disagree}</div><div class="all-case-bottom"><span>DT ${c.dt_prediction} · RF ${c.rf_prediction} · XGB ${c.xgb_prediction}</span><span>${c.resource_profile}</span></div></article>`
  }).join('');
  document.querySelectorAll('.all-case').forEach(el=>el.addEventListener('click',()=>{$('#case-select').value=el.dataset.id;selectedCandidate=null;showView('dashboard')}));
}
function renderModelsView(){
  const stats=['dt','rf','xgb'].map(k=>{const name=k==='dt'?'Decision Tree':k==='rf'?'Random Forest':'XGBoost'; const apply=CASES.filter(c=>finalFor(c,k)==='APPLY').length; const fallback=CASES.filter(c=>finalFor(c,k)==='FALLBACK').length; const reject=CASES.filter(c=>finalFor(c,k)==='REJECT').length; const s512=CASES.filter(c=>Number(finalLevel(c,k))===512).length; const s768=CASES.filter(c=>Number(finalLevel(c,k))===768).length; const s1024=CASES.filter(c=>Number(finalLevel(c,k))===1024).length; return [name,apply,fallback,reject,s512,s768,s1024]});
  $('#comparison-cards').innerHTML=stats.map(s=>`<div class="compare-card"><div class="model-name">${s[0]}</div><div class="compare-number">${s[1]}</div><div class="muted">APPLY decisions</div><div class="stat-note">${s[2]} fallback · ${s[3]} reject · final 512:${s[4]} · 768:${s[5]} · 1024:${s[6]}</div></div>`).join('');
  const dis=CASES.filter(modelDisagree);
  $('#disagreement-chip').textContent=`${dis.length} cases`;
  $('#disagreement-body').innerHTML=dis.map(c=>`<tr><td>${c.scenario_id}</td><td>${c.security_profile}</td><td>${c.required_security_level}</td><td>${c.dt_prediction}</td><td>${c.rf_prediction}</td><td>${c.xgb_prediction}</td><td>${finalFor(c,'rf')}</td></tr>`).join('');
}
function renderEngine(){
  $('#engine-grid').innerHTML=STAGES.map((s,i)=>`<div class="engine-stage"><div class="big-num">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('');
  $('#rules').innerHTML=[
    'Required security level is a minimum constraint and cannot be bypassed by an ML prediction.',
    'Candidates below the required security level are removed by the security filter.',
    'Final validation blocks unsafe or infeasible recommendations; when no valid path remains, the output is REJECT.'
  ].map(x=>`<div class="rule">${x}</div>`).join('');
}
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view')); document.getElementById(id).classList.add('active-view');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===id));
  $('#page-title').textContent={dashboard:'Adaptive Post-Quantum Security Dashboard',engine:'Adaptive Engine',models:'Model Comparison',cases:`All ${CASES.length} Replay Cases`}[id];
  if(id==='cases') populateCaseView(); if(id==='models') renderModelsView();
  window.scrollTo({top:0,behavior:'smooth'});
}

document.querySelectorAll('.nav-item').forEach(n=>n.addEventListener('click',()=>showView(n.dataset.view)));
$('#run-btn').addEventListener('click',animateRun);
$('#case-select').addEventListener('change',()=>{selectedCandidate=null;});
$('#next-btn').addEventListener('click',()=>{const i=CASES.findIndex(c=>c.scenario_id===currentCase().scenario_id); const next=CASES[(i+1)%CASES.length]; $('#case-select').value=next.scenario_id; selectedCandidate=null; renderAll(next)});
$('#case-search').addEventListener('input',populateCaseView); $('#security-filter').addEventListener('change',populateCaseView); $('#result-filter').addEventListener('change',populateCaseView);

renderCaseSelect(); renderEngine(); renderModelsView(); populateCaseView();
$('#nav-case-count').textContent=CASES.length;

// Loading Screen Logic
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const progressFill = document.getElementById('loading-progress');
  const progressPct = document.getElementById('loading-pct');
  const statusText = document.getElementById('loading-status-text');
  
  if (!loadingScreen) return;

  let progress = 0;
  const duration = 2200; // 2.2 seconds
  const intervalTime = 40;
  const steps = duration / intervalTime;
  const increment = 100 / steps;

  const statusMessages = [
    { pct: 0, msg: "INITIALIZING SECURITY MODELS..." },
    { pct: 25, msg: "LOADING REPLAY CASES..." },
    { pct: 50, msg: "EVALUATING HARDWARE METRICS..." },
    { pct: 80, msg: "SECURING ENVIRONMENT..." }
  ];

  const timer = setInterval(() => {
    progress += increment;
    if (progress >= 100) progress = 100;
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressPct) progressPct.textContent = `${Math.floor(progress)}%`;

    if (statusText) {
      const currentMsg = statusMessages.slice().reverse().find(m => progress >= m.pct);
      if (currentMsg && statusText.textContent !== currentMsg.msg) {
        statusText.textContent = currentMsg.msg;
      }
    }

    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          loadingScreen.remove();
        }, 800);
      }, 400);
    }
  }, intervalTime);
});
