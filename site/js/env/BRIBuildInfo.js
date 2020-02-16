'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1010';
    this._commitGIT = 'd2ef83a956fe609a5273061f760eb2a35dde73c0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}