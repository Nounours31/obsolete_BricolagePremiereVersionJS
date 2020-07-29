'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-29 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-1665';
    this._commitGIT = '294efacc8001be06cdda9e23abcd691dc77cfa3c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}