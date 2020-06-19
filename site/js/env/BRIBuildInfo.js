'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-19 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1506';
    this._commitGIT = '4cf74b94cdf0dfd512df94873b9f6d643b992783';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}