'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-05 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1323';
    this._commitGIT = 'bfee63b3d919aa3da316e51d1909edff095a7081';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}