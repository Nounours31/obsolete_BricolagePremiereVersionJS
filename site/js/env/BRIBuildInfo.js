'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-25 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1044';
    this._commitGIT = 'd9fa8521fb4a18b551a0c2be48e258deb73d4092';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}