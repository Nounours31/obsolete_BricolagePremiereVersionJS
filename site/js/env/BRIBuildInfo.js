'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-29 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1301';
    this._commitGIT = '5ddd3f0887ddfa76c3e7ae2726e92b18bb40f159';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}