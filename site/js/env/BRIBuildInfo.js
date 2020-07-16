'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-16 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1612';
    this._commitGIT = '8550c446daf7bddf146001a1937330c87944a883';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}