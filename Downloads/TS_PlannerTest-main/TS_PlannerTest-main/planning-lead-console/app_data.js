// Local Storage Initializer for Planning Lead Console (seed dataset embedded)
// - Single entrypoint: AppData.init()
// - Stores each collection under keys: "plc::<collectionName>"
// - Sets appInitialized, appDataVersion and plc:initializedAt
// - Performs light reference validation and prints a summary

const AppData = {
  init() {
    const DATA_VERSION = "2025-11-24-v0"; // version for this seed payload
    const prevVersion = localStorage.getItem("appDataVersion");
    const already = localStorage.getItem("appInitialized");

    if (already === "true" && prevVersion === DATA_VERSION) {
      console.log("App data already initialized for version", DATA_VERSION);
      return;
    }

    // Embedded seed JSON (from Dummy Data Generator)
    const seedJson = `{"meta":{"generatedAtUtc":"2025-11-24T12:00:00Z","note":"Sample initialization dataset for Planning Lead Console \\u0026 Team Member Planner (UTC reference date above)."},"users":[{"id":"u-alice","uid":"local-alice-01","firstName":"Alice","lastName":"Nguyen","role":"PLANNING_LEAD","email":"alice.nguyen@example.local","isActive":true,"createdAt":"2025-07-01T09:20:00Z","updatedAt":"2025-11-24T11:50:00Z","deletedAt":null},{"id":"u-bob","uid":"local-bob-01","firstName":"Bob","lastName":"Martinez","role":"TEAM_MEMBER","email":"bob.martinez@example.local","isActive":true,"createdAt":"2025-08-12T14:05:00Z","updatedAt":"2025-11-23T16:40:00Z","deletedAt":null},{"id":"u-carol","uid":"local-carol-01","firstName":"Carol","lastName":"O\\'Connor","role":"TEAM_MEMBER","email":"carol.oconnor@example.local","isActive":true,"createdAt":"2025-09-02T07:30:00Z","updatedAt":"2025-11-22T10:10:00Z","deletedAt":null},{"id":"u-dave","uid":"local-dave-01","firstName":"Dave","lastName":"Singh","role":"ADMIN","email":"dave.singh@example.local","isActive":true,"createdAt":"2025-06-20T12:00:00Z","updatedAt":"2025-11-24T09:00:00Z","deletedAt":null}],"weekCalendar":[{"id":"2025-W47","startDate":"2025-11-19T00:00:00Z","endDate":"2025-11-24T23:59:59Z","planningDate":"2025-11-18T00:00:00Z","timezone":"America/Los_Angeles","holidayProfileId":"hp-default-us","status":"Monitoring","createdAt":"2025-07-01T00:00:00Z","updatedAt":"2025-11-24T11:59:00Z"},{"id":"2025-W46","startDate":"2025-11-12T00:00:00Z","endDate":"2025-11-17T23:59:59Z","planningDate":"2025-11-11T00:00:00Z","timezone":"America/Los_Angeles","holidayProfileId":"hp-default-us","status":"Published","createdAt":"2025-06-25T00:00:00Z","updatedAt":"2025-11-17T12:00:00Z"},{"id":"2025-W48","startDate":"2025-11-26T00:00:00Z","endDate":"2025-12-01T23:59:59Z","planningDate":"2025-11-25T00:00:00Z","timezone":"America/Los_Angeles","holidayProfileId":"hp-default-us","status":"Draft","createdAt":"2025-11-24T11:00:00Z","updatedAt":"2025-11-24T11:00:00Z"}],"leadClaims":[{"id":"lead-2025-W47","weekId":"2025-W47","teamId":"team-alpha","userId":"u-alice","claimedAt":"2025-11-18T15:12:00Z","claimedByName":"Alice Nguyen","overriddenByAdminId":null,"overrideReason":null,"status":"CLAIMED"},{"id":"lead-2025-W46","weekId":"2025-W46","teamId":"team-alpha","userId":"u-dave","claimedAt":"2025-11-11T13:50:00Z","claimedByName":"Dave Singh","overriddenByAdminId":null,"overrideReason":null,"status":"CLAIMED"},{"id":"lead-2025-W48-draft","weekId":"2025-W48","teamId":"team-alpha","userId":null,"claimedAt":null,"claimedByName":null,"overriddenByAdminId":null,"overrideReason":null,"status":"RELEASED"}],"activities":[{"id":"act-001","title":"Onboard Acme billing integration","description":"Implement initial integration for Acme client billing, including OAuth and invoice webhook processing.","classification":"client-focused","status":"Ready","createdAt":"2025-11-10T10:20:00Z","updatedAt":"2025-11-18T09:00:00Z","createdBy":"u-bob","priorityRank":1,"overrideRequested":false,"overrideRequestedClassification":null,"overrideJustification":null,"deletedAt":null},{"id":"act-002","title":"Refactor auth token refresh path","description":"Clean up retry logic and reduce transient 401s by improving refresh token handling and tests.","classification":"tech-debt","status":"Proposed","createdAt":"2025-11-09T09:00:00Z","updatedAt":"2025-11-19T08:00:00Z","createdBy":"u-carol","priorityRank":1,"overrideRequested":false,"overrideRequestedClassification":null,"overrideJustification":null,"deletedAt":null},{"id":"act-003","title":"Experiment: ML-based priority scorer","description":"Prototype ML model to score backlog items for prioritization A/B test (R\\u0026D runway).","classification":"R\\u0026D","status":"Proposed","createdAt":"2025-11-12T14:45:00Z","updatedAt":"2025-11-20T12:30:00Z","createdBy":"u-alice","priorityRank":2,"overrideRequested":false,"overrideRequestedClassification":null,"overrideJustification":null,"deletedAt":null},{"id":"act-004","title":"Urgent: fix payment-edge-case for Acme","description":"Payments failing for Acme customers with multi-currency, needs patch and testcases.","classification":"tech-debt","status":"Ready","createdAt":"2025-11-17T11:00:00Z","updatedAt":"2025-11-21T09:30:00Z","createdBy":"u-bob","priorityRank":2,"overrideRequested":true,"overrideRequestedClassification":"client-focused","overrideJustification":"This affects Acme\\'s invoices and should be client-focused; request to escalate.","deletedAt":null},{"id":"act-005","title":"Investigate serverless cold-start","description":"Measure and reduce cold-start latency on serverless endpoints (R\\u0026D \\u0026 perf).","classification":"R\\u0026D","status":"Proposed","createdAt":"2025-11-13T08:20:00Z","updatedAt":"2025-11-19T18:00:00Z","createdBy":"u-carol","priorityRank":1,"overrideRequested":false,"overrideRequestedClassification":null,"overrideJustification":null,"deletedAt":null},{"id":"act-006","title":"Migrate legacy reports to new BI","description":"Move old reporting ETL into the new BI pipeline, reduce maintenance burden.","classification":"tech-debt","status":"Proposed","createdAt":"2025-11-05T13:00:00Z","updatedAt":"2025-11-15T10:30:00Z","createdBy":"u-dave","priorityRank":3,"overrideRequested":false,"overrideRequestedClassification":null,"overrideJustification":null,"deletedAt":null}],"activityPriorities":[{"id":"2025-W47_client-focused","weekId":"2025-W47","classification":"client-focused","version":3,"priorityList":[{"activityId":"act-001","rank":1},{"activityId":"act-004","rank":2}],"createdBy":"u-alice","updatedAt":"2025-11-19T09:00:00Z"},{"id":"2025-W47_tech-debt","weekId":"2025-W47","classification":"tech-debt","version":2,"priorityList":[{"activityId":"act-002","rank":1},{"activityId":"act-006","rank":2},{"activityId":"act-004","rank":3}],"createdBy":"u-dave","updatedAt":"2025-11-20T13:30:00Z"},{"id":"2025-W47_R\\u0026D","weekId":"2025-W47","classification":"R\\u0026D","version":1,"priorityList":[{"activityId":"act-005","rank":1},{"activityId":"act-003","rank":2}],"createdBy":"u-carol","updatedAt":"2025-11-19T18:00:00Z"}],"overrideRequests":[{"id":"ovr-0001","activityId":"act-004","requesterId":"u-bob","currentClassification":"tech-debt","requestedClassification":"client-focused","justification":"Payment failures impact Acme\\'s billing; treat as client-facing.","status":"PENDING","createdAt":"2025-11-21T09:35:00Z","resolvedAt":null,"approvedBy":null},{"id":"ovr-0002","activityId":"act-003","requesterId":"u-alice","currentClassification":"R\\u0026D","requestedClassification":"R\\u0026D","justification":"No change; test request (edge-case).","status":"REJECTED","createdAt":"2025-11-20T12:35:00Z","resolvedAt":"2025-11-20T13:10:00Z","approvedBy":"u-dave"},{"id":"ovr-0003","activityId":"act-002","requesterId":"u-carol","currentClassification":"tech-debt","requestedClassification":"tech-debt","justification":"Minor wording fix; framework test.","status":"APPROVED","createdAt":"2025-11-19T08:05:00Z","resolvedAt":"2025-11-19T09:00:00Z","approvedBy":"u-alice"}],"unavailability":[{"id":"unavail-u-alice-2025-W47","weekId":"2025-W47","userId":"u-alice","days":[{"date":"2025-11-19","hours":0,"reasonCode":null},{"date":"2025-11-20","hours":0,"reasonCode":null},{"date":"2025-11-21","hours":0,"reasonCode":null},{"date":"2025-11-22","hours":0,"reasonCode":null},{"date":"2025-11-23","hours":0,"reasonCode":null}],"version":1,"updatedAt":"2025-11-18T10:00:00Z"},{"id":"unavail-u-bob-2025-W47","weekId":"2025-W47","userId":"u-bob","days":[{"date":"2025-11-19","hours":4,"reasonCode":"PTO"},{"date":"2025-11-20","hours":0,"reasonCode":null},{"date":"2025-11-21","hours":0,"reasonCode":null},{"date":"2025-11-22","hours":0,"reasonCode":null},{"date":"2025-11-23","hours":0,"reasonCode":null}],"version":2,"updatedAt":"2025-11-18T15:30:00Z"},{"id":"unavail-u-carol-2025-W47","weekId":"2025-W47","userId":"u-carol","days":[{"date":"2025-11-19","hours":8,"reasonCode":"PTO"},{"date":"2025-11-20","hours":8,"reasonCode":"PTO"},{"date":"2025-11-21","hours":8,"reasonCode":"PTO"},{"date":"2025-11-22","hours":8,"reasonCode":"PTO"},{"date":"2025-11-23","hours":8,"reasonCode":"PTO"}],"version":1,"updatedAt":"2025-11-17T08:00:00Z"}],"capacities":[{"id":"cap-u-alice-2025-W47","weekId":"2025-W47","userId":"u-alice","daily":[{"date":"2025-11-19","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-20","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-21","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-22","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-23","baseline":8,"holiday":0,"unavailable":0,"available":8}],"weeklyTotal":40,"targets":{"client":20,"techDebt":10,"rnd":10},"zeroCapacity":false,"version":1,"updatedAt":"2025-11-18T10:05:00Z"},{"id":"cap-u-bob-2025-W47","weekId":"2025-W47","userId":"u-bob","daily":[{"date":"2025-11-19","baseline":8,"holiday":0,"unavailable":4,"available":4},{"date":"2025-11-20","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-21","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-22","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-23","baseline":8,"holiday":0,"unavailable":0,"available":8}],"weeklyTotal":36,"targets":{"client":18,"techDebt":9,"rnd":9},"zeroCapacity":false,"version":2,"updatedAt":"2025-11-18T15:35:00Z"},{"id":"cap-u-carol-2025-W47","weekId":"2025-W47","userId":"u-carol","daily":[{"date":"2025-11-19","baseline":8,"holiday":0,"unavailable":8,"available":0},{"date":"2025-11-20","baseline":8,"holiday":0,"unavailable":8,"available":0},{"date":"2025-11-21","baseline":8,"holiday":0,"unavailable":8,"available":0},{"date":"2025-11-22","baseline":8,"holiday":0,"unavailable":8,"available":0},{"date":"2025-11-23","baseline":8,"holiday":0,"unavailable":8,"available":0}],"weeklyTotal":0,"targets":{"client":0,"techDebt":0,"rnd":0},"zeroCapacity":true,"version":1,"updatedAt":"2025-11-17T08:05:00Z"},{"id":"cap-u-dave-2025-W47","weekId":"2025-W47","userId":"u-dave","daily":[{"date":"2025-11-19","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-20","baseline":8,"holiday":0,"unavailable":2,"available":6},{"date":"2025-11-21","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-22","baseline":8,"holiday":0,"unavailable":0,"available":8},{"date":"2025-11-23","baseline":8,"holiday":0,"unavailable":0,"available":8}],"weeklyTotal":38,"targets":{"client":19,"techDebt":9,"rnd":10},"zeroCapacity":false,"version":1,"updatedAt":"2025-11-18T16:00:00Z"}],"assignments":[{"id":"asg-a1-u-alice","weekId":"2025-W47","userId":"u-alice","activityId":"act-001","classification":"client-focused","segments":22,"status":"Planned","createdAt":"2025-11-18T10:15:00Z","updatedAt":"2025-11-18T10:15:00Z","deletedAt":null},{"id":"asg-a3-u-alice","weekId":"2025-W47","userId":"u-alice","activityId":"act-002","classification":"tech-debt","segments":10,"status":"Planned","createdAt":"2025-11-19T09:10:00Z","updatedAt":"2025-11-19T09:10:00Z","deletedAt":null},{"id":"asg-a5-u-alice","weekId":"2025-W47","userId":"u-alice","activityId":"act-005","classification":"R\\u0026D","segments":8,"status":"Planned","createdAt":"2025-11-20T12:00:00Z","updatedAt":"2025-11-20T12:00:00Z","deletedAt":null},{"id":"asg-a1-u-bob","weekId":"2025-W47","userId":"u-bob","activityId":"act-001","classification":"client-focused","segments":15,"status":"Planned","createdAt":"2025-11-18T11:00:00Z","updatedAt":"2025-11-18T11:00:00Z","deletedAt":null},{"id":"asg-a2-u-bob","weekId":"2025-W47","userId":"u-bob","activityId":"act-002","classification":"tech-debt","segments":10,"status":"Planned","createdAt":"2025-11-19T10:00:00Z","updatedAt":"2025-11-19T10:00:00Z","deletedAt":null},{"id":"asg-a5-u-bob","weekId":"2025-W47","userId":"u-bob","activityId":"act-005","classification":"R\\u0026D","segments":5,"status":"Planned","createdAt":"2025-11-20T13:00:00Z","updatedAt":"2025-11-20T13:00:00Z","deletedAt":null},{"id":"asg-a6-u-dave","weekId":"2025-W47","userId":"u-dave","activityId":"act-006","classification":"tech-debt","segments":12,"status":"Planned","createdAt":"2025-11-18T12:30:00Z","updatedAt":"2025-11-18T12:30:00Z","deletedAt":null},{"id":"asg-a001-u-dave-client","weekId":"2025-W47","userId":"u-dave","activityId":"act-001","classification":"client-focused","segments":19,"status":"Planned","createdAt":"2025-11-19T14:00:00Z","updatedAt":"2025-11-19T14:00:00Z","deletedAt":null},{"id":"asg-a003-u-dave-rnd","weekId":"2025-W47","userId":"u-dave","activityId":"act-003","classification":"R\\u0026D","segments":7,"status":"Planned","createdAt":"2025-11-20T09:15:00Z","updatedAt":"2025-11-20T09:15:00Z","deletedAt":null}],"progressLogs":[{"id":"pl-0001","assignmentId":"asg-a1-u-alice","userId":"u-alice","weekId":"2025-W47","hours":2,"statusTransition":"Not Started-\\u003EIn Progress","timestamp":"2025-11-19T16:00:00Z","note":"Initial integration spike - OAuth evening work"},{"id":"pl-0002","assignmentId":"asg-a3-u-alice","userId":"u-alice","weekId":"2025-W47","hours":1,"statusTransition":"Not Started-\\u003EIn Progress","timestamp":"2025-11-20T10:30:00Z","note":"Started refactor tests"},{"id":"pl-0003","assignmentId":"asg-a1-u-bob","userId":"u-bob","weekId":"2025-W47","hours":4,"statusTransition":"Not Started-\\u003EIn Progress","timestamp":"2025-11-19T12:40:00Z","note":"Morning focus on client ticket"}],"planSnapshots":[{"id":"snapshot-2025-W46-2025-11-17T12:00:00Z","weekId":"2025-W46","status":"Published","publishedAt":"2025-11-17T12:00:00Z","createdAt":"2025-11-17T12:00:00Z","createdBy":"u-dave","activities":[{"activityId":"act-001","title":"Onboard Acme billing integration","classification":"client-focused","priorityRank":1},{"activityId":"act-002","title":"Refactor auth token refresh path","classification":"tech-debt","priorityRank":1}],"capacitiesSnapshotRef":"cap-snapshot-2025-W46","summary":{"capacity":152,"allocated":152,"byCategoryClient":76,"byCategoryTechDebt":38,"byCategoryRnd":38},"version":1,"immutable":true},{"id":"snapshot-2025-W47-draft-2025-11-24T11:59:00Z","weekId":"2025-W47","status":"Monitoring","publishedAt":null,"createdAt":"2025-11-24T11:59:00Z","createdBy":"u-alice","activities":[{"activityId":"act-001","title":"Onboard Acme billing integration","classification":"client-focused","priorityRank":1},{"activityId":"act-004","title":"Urgent: fix payment-edge-case for Acme","classification":"tech-debt","priorityRank":2},{"activityId":"act-002","title":"Refactor auth token refresh path","classification":"tech-debt","priorityRank":1},{"activityId":"act-005","title":"Investigate serverless cold-start","classification":"R\\u0026D","priorityRank":1},{"activityId":"act-003","title":"Experiment: ML-based priority scorer","classification":"R\\u0026D","priorityRank":2}],"capacitiesSnapshotRef":null,"summary":{"capacity":114,"allocated":110,"byCategoryClient":56,"byCategoryTechDebt":29,"byCategoryRnd":25},"version":3,"immutable":false},{"id":"snapshot-archived-sample","weekId":"2025-W40","status":"Archived","publishedAt":"2025-10-15T08:00:00Z","createdAt":"2025-10-15T08:00:00Z","createdBy":"u-dave","activities":[],"capacitiesSnapshotRef":null,"summary":{"capacity":0,"allocated":0,"byCategoryClient":0,"byCategoryTechDebt":0,"byCategoryRnd":0},"version":1,"immutable":true}],"changeRequests":[{"id":"cr-0001","weekId":"2025-W47","requesterId":"u-alice","type":"FORCE_PUBLISH","reason":"Team asks to force publish before remaining members finish due to external deadline.","targetEntity":"Plan","targetEntityId":"2025-W47","status":"PENDING","createdAt":"2025-11-24T08:45:00Z","resolvedAt":null,"adminDecisionId":null},{"id":"cr-0002","weekId":"2025-W46","requesterId":"u-dave","type":"POST_PUBLICATION_EDIT","reason":"Fix typo in published snapshot summary","targetEntity":"PlanSnapshot","targetEntityId":"snapshot-2025-W46-2025-11-17T12:00:00Z","status":"APPROVED","createdAt":"2025-11-17T13:00:00Z","resolvedAt":"2025-11-17T14:30:00Z","adminDecisionId":"apr-0002"},{"id":"cr-0003","weekId":"2025-W47","requesterId":"u-bob","type":"POST_PUBLICATION_EDIT","reason":"N/A - test request (should be blocked until publish).","targetEntity":"Activity","targetEntityId":"act-002","status":"REJECTED","createdAt":"2025-11-20T10:00:00Z","resolvedAt":"2025-11-20T11:10:00Z","adminDecisionId":"apr-0003"}],"approvalDecisions":[{"id":"apr-0001","requestId":"ovr-0003","approverId":"u-alice","decision":"APPROVE","reason":"Small wording only, OK to proceed.","createdAt":"2025-11-19T09:05:00Z"},{"id":"apr-0002","requestId":"cr-0002","approverId":"u-dave","decision":"APPROVE","reason":"Typo fix approved.","createdAt":"2025-11-17T14:25:00Z"},{"id":"apr-0003","requestId":"cr-0003","approverId":"u-dave","decision":"REJECT","reason":"Cannot edit pre-publication; reject test import request.","createdAt":"2025-11-20T11:08:00Z"}],"auditEvents":[{"id":"ae-0001","type":"ACTIVITY_CREATED","whoId":"u-bob","whoName":"Bob Martinez","when":"2025-11-10T10:20:00Z","weekId":"2025-W46","entityType":"Activity","entityId":"act-001","before":"{}","after":"{\\"id\\":\\"act-001\\",\\"title\\":\\"Onboard Acme billing integration\\"}","metadata":"created via backlog form"},{"id":"ae-0002","type":"PRIORITY_CHANGED","whoId":"u-alice","whoName":"Alice Nguyen","when":"2025-11-19T09:00:00Z","weekId":"2025-W47","entityType":"PriorityList","entityId":"2025-W47_client-focused","before":"[\\\"act-004\\\",\\\"act-001\\\"]","after":"[\\\"act-001\\\",\\\"act-004\\\"]","metadata":"{\\"version\\":3}"},{"id":"ae-0003","type":"CAPACITY_UPDATED","whoId":"u-bob","whoName":"Bob Martinez","when":"2025-11-18T15:35:00Z","weekId":"2025-W47","entityType":"Capacity","entityId":"cap-u-bob-2025-W47","before":"{\\"weeklyTotal\\":40}","after":"{\\"weeklyTotal\\":36}","metadata":"{\\"version\\":2}"},{"id":"ae-0004","type":"ASSIGNMENT_CREATED","whoId":"u-alice","whoName":"Alice Nguyen","when":"2025-11-18T10:15:00Z","weekId":"2025-W47","entityType":"Assignment","entityId":"asg-a1-u-alice","before":"{}","after":"{\\"segments\\":22}","metadata":""},{"id":"ae-0005","type":"CLASSIFICATION_OVERRIDE","whoId":"u-bob","whoName":"Bob Martinez","when":"2025-11-21T09:35:00Z","weekId":"2025-W47","entityType":"OverrideRequest","entityId":"ovr-0001","before":"{\\"currentClassification\\":\\"tech-debt\\"}","after":"{\\"requestedClassification\\":\\"client-focused\\"}","metadata":""}],"notifications":[{"id":"notif-2025-W46-published","type":"PLAN_PUBLISHED","locale":"en-US","subject":"Plan published: 2025-W46","body":"The plan for week 2025-W46 was published by Dave Singh. Summary: capacity 152h, allocated 152h.","payload":"{\\"weekId\\":\\"2025-W46\\",\\"summary\\":{\\"capacity\\":152,\\"allocated\\":152}}","createdAt":"2025-11-17T12:05:00Z","delivered":true},{"id":"notif-2025-W47-monitoring","type":"INFO","locale":"en-US","subject":"Plan monitoring: 2025-W47 (Draft)","body":"The plan for 2025-W47 is in monitoring. Waiting for remaining members to meet allocation targets.","payload":"{\\"weekId\\":\\"2025-W47\\",\\"status\\":\\"Monitoring\\"}","createdAt":"2025-11-24T11:59:00Z","delivered":false},{"id":"notif-ovr-0001","type":"WARNING","locale":"en-US","subject":"Override requested: act-004","body":"Bob Martinez requested a classification override for \\'Urgent: fix payment-edge-case for Acme\\'.","payload":"{\\"overrideId\\":\\"ovr-0001\\",\\"activityId\\":\\"act-004\\"}","createdAt":"2025-11-21T09:36:00Z","delivered":false}],"holidayDates":[{"id":"hp-default-us-2025-11-27","date":"2025-11-27","region":"US","reducesBaseline":true,"description":"Thanksgiving (example) - reduces baseline"},{"id":"hp-default-us-2025-12-25","date":"2025-12-25","region":"US","reducesBaseline":true,"description":"Christmas Day"},{"id":"hp-default-us-2025-01-01","date":"2025-01-01","region":"US","reducesBaseline":true,"description":"New Year\\'s Day"}],"policies":[{"id":"policy-default-2025","name":"Default 50/25/25 policy","clientPct":0.5,"techPct":0.25,"rdPct":0.25,"segmentSizeHours":1,"dailyBaselineHours":8,"roundingStrategy":"sum-preserving","effectiveFrom":"2025-01-01T00:00:00Z","effectiveTo":null,"version":1},{"id":"policy-experiment-2025-11","name":"Experiment: 60/20/20 (not active)","clientPct":0.6,"techPct":0.2,"rdPct":0.2,"segmentSizeHours":1,"dailyBaselineHours":8,"roundingStrategy":"sum-preserving","effectiveFrom":"2025-12-01T00:00:00Z","effectiveTo":null,"version":1},{"id":"policy-legacy","name":"Legacy (fallback)","clientPct":0.5,"techPct":0.25,"rdPct":0.25,"segmentSizeHours":1,"dailyBaselineHours":8,"roundingStrategy":"sum-preserving","effectiveFrom":"2024-01-01T00:00:00Z","effectiveTo":"2024-12-31T23:59:59Z","version":1}],"appConfig":[{"id":"current","teamTimezone":"America/Los_Angeles","policyId":"policy-default-2025","holidayProfileId":"hp-default-us","notificationPrefs":"{\\"inApp\\": true, \\"email\\": false}","createdAt":"2025-06-01T08:00:00Z","updatedAt":"2025-11-24T11:00:00Z"}],"uiState":[{"id":"ui-u-alice","userId":"u-alice","currentWeekId":"2025-W47","lastSelectedTab":"monitoring","filters":"{\\"backlog\\":{\\"classification\\":null},\\"approvals\\":{\\"status\\":\\"PENDING\\"}}","columnWidths":"{\\"client\\":320,\\"tech-debt\\":300,\\"R\\u0026D\\":300}","updatedAt":"2025-11-24T11:58:00Z"},{"id":"ui-global","userId":null,"currentWeekId":"2025-W47","lastSelectedTab":"backlog","filters":"{\\"showDeleted\\":false}","columnWidths":"{}","updatedAt":"2025-11-24T11:00:00Z"},{"id":"ui-u-bob","userId":"u-bob","currentWeekId":"2025-W47","lastSelectedTab":"assignments","filters":"{\\"assignments\\":{\\"status\\":\\"Planned\\"}}","columnWidths":"{\\"left\\":250,\\"right\\":500}","updatedAt":"2025-11-23T16:45:00Z"}]}`;

    let seedData;
    try {
      seedData = JSON.parse(seedJson);
    } catch (err) {
      console.error("Failed to parse embedded seed JSON:", err);
      return;
    }

    // Collections we expect to initialize (based on schema)
    const collectionNames = [
      "meta",
      "users",
      "weekCalendar",
      "leadClaims",
      "activities",
      "activityPriorities",
      "overrideRequests",
      "unavailability",
      "capacities",
      "assignments",
      "progressLogs",
      "planSnapshots",
      "changeRequests",
      "approvalDecisions",
      "auditEvents",
      "notifications",
      "holidayDates",
      "policies",
      "appConfig",
      "uiState"
    ];

    // Helper: write collection to localStorage with prefix
    function seedCollection(name, value) {
      const key = `plc::${name}`;
      try {
        localStorage.setItem(key, JSON.stringify(value === undefined ? [] : value));
      } catch (err) {
        console.error(`Failed storing collection ${name} to localStorage:`, err);
      }
    }

    // Seed collections: if provided in seedData use that, otherwise empty array/object
    for (const name of collectionNames) {
      if (Object.prototype.hasOwnProperty.call(seedData, name)) {
        seedCollection(name, seedData[name]);
      } else {
        // Provide sensible defaults: meta -> object, others -> []
        seedCollection(name, name === "meta" ? (seedData.meta || {}) : []);
      }
    }

    // Also store a top-level meta object
    if (seedData.meta) {
      localStorage.setItem("plc::meta", JSON.stringify(seedData.meta));
    } else {
      localStorage.setItem("plc::meta", JSON.stringify({ initializedAt: new Date().toISOString() }));
    }

    // Set versioning and initialization flags
    localStorage.setItem("appInitialized", "true");
    localStorage.setItem("appDataVersion", DATA_VERSION);
    localStorage.setItem("plc:initializedAt", new Date().toISOString());

    // Light-weight validation of references (warn but do not fail)
    (function validateReferences() {
      const get = (k) => {
        const raw = localStorage.getItem(`plc::${k}`);
        if (!raw) return null;
        try { return JSON.parse(raw); } catch { return null; }
      };
      const users = get("users") || [];
      const activities = get("activities") || [];
      const assignments = get("assignments") || [];
      const capacities = get("capacities") || [];
      const planSnapshots = get("planSnapshots") || [];
      const approvalDecisions = get("approvalDecisions") || [];
      const changeRequests = get("changeRequests") || [];
      const auditEvents = get("auditEvents") || [];
      const overrideRequests = get("overrideRequests") || [];
      const weekCalendar = get("weekCalendar") || [];

      const userIds = new Set(users.map(u => u.id));
      const activityIds = new Set(activities.map(a => a.id));
      const assignmentIds = new Set(assignments.map(a => a.id));
      const weekIds = new Set(weekCalendar.map(w => w.id));
      const capacityIds = new Set(capacities.map(c => c.id));

      function warnIfMissing(entity, id, listName) {
        if (!id) return;
        if (listName === "user" && !userIds.has(id)) console.warn(`Reference validation: ${entity} references missing user id "${id}"`);
        if (listName === "activity" && !activityIds.has(id)) console.warn(`Reference validation: ${entity} references missing activity id "${id}"`);
        if (listName === "assignment" && !assignmentIds.has(id)) console.warn(`Reference validation: ${entity} references missing assignment id "${id}"`);
        if (listName === "week" && !weekIds.has(id)) console.warn(`Reference validation: ${entity} references missing week id "${id}"`);
        if (listName === "capacity" && !capacityIds.has(id)) console.warn(`Reference validation: ${entity} references missing capacity id "${id}"`);
      }

      // activities.createdBy -> users
      activities.forEach(a => warnIfMissing(`activities.${a.id}.createdBy`, a.createdBy, "user"));

      // overrideRequests.requesterId -> users ; overrideRequests.activityId -> activities
      overrideRequests.forEach(o => {
        warnIfMissing(`overrideRequests.${o.id}.requesterId`, o.requesterId, "user");
        warnIfMissing(`overrideRequests.${o.id}.activityId`, o.activityId, "activity");
      });

      // assignments -> userId, activityId, weekId
      assignments.forEach(asg => {
        warnIfMissing(`assignments.${asg.id}.userId`, asg.userId, "user");
        warnIfMissing(`assignments.${asg.id}.activityId`, asg.activityId, "activity");
        warnIfMissing(`assignments.${asg.id}.weekId`, asg.weekId, "week");
      });

      // capacities -> userId, weekId
      capacities.forEach(c => {
        warnIfMissing(`capacities.${c.id}.userId`, c.userId, "user");
        warnIfMissing(`capacities.${c.id}.weekId`, c.weekId, "week");
      });

      // progressLogs -> userId, assignmentId, weekId
      const progressLogs = get("progressLogs") || [];
      progressLogs.forEach(pl => {
        warnIfMissing(`progressLogs.${pl.id}.userId`, pl.userId, "user");
        warnIfMissing(`progressLogs.${pl.id}.assignmentId`, pl.assignmentId, "assignment");
        warnIfMissing(`progressLogs.${pl.id}.weekId`, pl.weekId, "week");
      });

      // planSnapshots.createdBy -> users ; planSnapshots.weekId -> week
      planSnapshots.forEach(ps => {
        warnIfMissing(`planSnapshots.${ps.id}.createdBy`, ps.createdBy, "user");
        warnIfMissing(`planSnapshots.${ps.id}.weekId`, ps.weekId, "week");
        // each activity in snapshot should be present in activities (best-effort)
        (ps.activities || []).forEach(a => {
          if (a.activityId && !activityIds.has(a.activityId)) {
            console.warn(`planSnapshots.${ps.id} contains activityId ${a.activityId} not found in activities collection`);
          }
        });
      });

      // changeRequests.requesterId
      changeRequests.forEach(cr => warnIfMissing(`changeRequests.${cr.id}.requesterId`, cr.requesterId, "user"));

      // approvalDecisions.approverId
      approvalDecisions.forEach(ad => warnIfMissing(`approvalDecisions.${ad.id}.approverId`, ad.approverId, "user"));

      // auditEvents.whoId
      auditEvents.forEach(ae => {
        if (ae.whoId && !userIds.has(ae.whoId)) {
          console.warn(`auditEvents.${ae.id} references whoId "${ae.whoId}" that is not present in users collection`);
        }
      });

      // final short console summary of warnings presence
      console.log("Reference validation complete. See warnings above for any missing refs.");
    })();

    // Print a short summary of what was persisted
    (function printSummary() {
      const ks = collectionNames;
      const counts = ks.map(k => {
        const raw = localStorage.getItem(`plc::${k}`);
        if (!raw) return { k, count: 0 };
        try {
          const parsed = JSON.parse(raw);
          return { k, count: Array.isArray(parsed) ? parsed.length : Object.keys(parsed).length };
        } catch {
          return { k, count: "?" };
        }
      });
      console.groupCollapsed("PL Console seed: collections written (prefix: plc::)");
      counts.forEach(c => console.log(`${c.k}:`, c.count));
      console.groupEnd();
      console.log("Seeded appDataVersion:", DATA_VERSION);
    })();

    console.info("Local seed initialization finished. Key prefix: 'plc::'. Set appInitialized=true.");
  }
};

// Run initializer
AppData.init();