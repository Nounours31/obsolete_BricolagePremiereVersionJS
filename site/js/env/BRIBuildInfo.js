'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-07 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1577';
    this._commitGIT = 'ab664c10496bdd6fc1598192c2cbd7d1caf85b65';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}