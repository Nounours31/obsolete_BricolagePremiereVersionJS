'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-21 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1267';
    this._commitGIT = '9903c7b0a1031de3387533203355705e56d79db5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}