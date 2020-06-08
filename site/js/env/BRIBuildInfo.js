'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-08 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1462';
    this._commitGIT = '1e63b76beacf58b98f852292cd42a8ce15fc094e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}