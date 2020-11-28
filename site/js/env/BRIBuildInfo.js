'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-28 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2151';
    this._commitGIT = '2eeca81d6cc4e8d26688049dfb55380b28b22594';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}