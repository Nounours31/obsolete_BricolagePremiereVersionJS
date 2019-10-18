'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-18 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-524';
    this._commitGIT = '24ac7a501f57cb06975ba7842a7c26290078b9d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}