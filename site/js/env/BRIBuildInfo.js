'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-28 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-445';
    this._commitGIT = '9573f73318605b82b96d48a0fae4c7038ac2188a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}