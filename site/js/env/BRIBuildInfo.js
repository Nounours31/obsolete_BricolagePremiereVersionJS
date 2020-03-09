'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-09 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1095';
    this._commitGIT = 'bb1619a9cd64a2224dc82bb5b43923e2b35aacce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}