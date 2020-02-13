'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-13 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-997';
    this._commitGIT = 'ea7c68a6427a1b515e41ac015c80a5f2abe0bb33';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}