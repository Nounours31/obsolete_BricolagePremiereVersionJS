'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-04 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1932';
    this._commitGIT = 'cfedcc0a1ba52fc79c8cbe3e8a4574adc3ea5a56';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}