'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-22 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1637';
    this._commitGIT = '32067d1907ee9d73dcb38960062e5f706c518f6a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}