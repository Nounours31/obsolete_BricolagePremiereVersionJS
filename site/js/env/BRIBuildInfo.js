'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-14 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1971';
    this._commitGIT = '6da8aedad37a07f47ab04486d5b4b393fb3d37c0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}