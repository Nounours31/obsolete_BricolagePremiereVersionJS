'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-23 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-788';
    this._commitGIT = '268997b9d81bcbff59a87f901bcfe37aec488747';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}