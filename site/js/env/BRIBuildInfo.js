'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-01 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-458';
    this._commitGIT = '6da0d338c264edb378f0ff41cc4de21f22edb970';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}