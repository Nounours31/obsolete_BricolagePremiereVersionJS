'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-07 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1700';
    this._commitGIT = 'cb912b9421f0176656cbfd671c740552f60bc955';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}