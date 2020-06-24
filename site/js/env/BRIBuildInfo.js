'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-24 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1525';
    this._commitGIT = '40d7b2171d8ceec2feb2828acbe562a90c176324';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}