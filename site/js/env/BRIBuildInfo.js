'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1092';
    this._commitGIT = 'a603b2cb588e1363cbec36115830b7e1a2abb7fc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}